import { useMutation } from "@tanstack/react-query";
import { MockResult, submitForm } from "../../../services/passwordApi";
import { incrementStep } from "../../../redux/features/passwordManagerSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPasswordError } from "../../../redux/features/passwordManagerSlice";

export const useSubmitPasswordMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitPasswordMutation = useMutation((password: string) =>
    submitForm(password)
      .then((response: MockResult) => {
        response.status === 200 &&
          dispatch(incrementStep()) &&
          navigate("/feedback");
      })
      .catch((error: { status: number }) => {
        error.status === 401 &&
          dispatch(incrementStep()) &&
          dispatch(setPasswordError()) &&
          navigate("/feedback");
      })
  );

  return {
    isLoading: submitPasswordMutation.isLoading,
    submitPasswordMutation,
  };
};
