import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import api from "../api";

const useFetch = () => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    successMsg: "",
    errorMsg: "",
  });

  const fetchData = useCallback(async (config, otherOptions) => {
    // Destructuring other options with default values for toast notifications
    const { showSuccessToast = true, showErrorToast = true } =
      otherOptions || {};
    setState((state) => ({ ...state, loading: true }));

    try {
      // Sending API request using the provided configuration
      const { data } = await api.request(config);
      setState({
        loading: false,
        data,
        successMsg: data.msg || "success",
        errorMsg: "",
      });
      // Showing success toast notification if enabled
      if (showSuccessToast) toast.success(data.msg);
      // Resolving the promise with the received data
      return Promise.resolve(data);
    } catch (error) {
      const msg = error.response?.data?.msg || error.message || "error";
      setState({
        loading: false,
        data: null,
        errorMsg: msg,
        successMsg: "",
      });
      // Showing error toast notification if enabled
      if (showErrorToast) toast.error(msg);
      return Promise.reject();
    }
  }, []);
  // Returning fetchData function and current state
  return [fetchData, state];
};

export default useFetch;
