import { useMutation } from "@tanstack/react-query";
import { MockResult, submitForm } from "../../../services/passwordApi";
import { incrementStep } from "../../../redux/features/stepperSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const useSubmitPasswordMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitPasswordMutation = useMutation((password: string) =>
    submitForm(password)
      .then((response: MockResult) => {
        response.status === 200 &&
          dispatch(incrementStep()) &&
          navigate("/feedback_OK");
      })
      .catch((error: { status: number }) => {
        error.status === 401 &&
          dispatch(incrementStep()) &&
          navigate("/feedback_KO");
      })
  );

  return {
    isLoading: submitPasswordMutation.isLoading,
    submitPasswordMutation,
  };
};
