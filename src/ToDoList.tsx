import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  password: string;
  email: string;
  password2: string;
  extraErrors?: string;
}
function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: { password: "password", email: "wlsdndml213@naver.com", password2: "password2" },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password2) {
      return setError("password", { message: "패스워드가 다릅니다" }, { shouldFocus: true });
    }
    //setError("extraErrors", { message: "서버다운" });
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register("password", {
            required: "필요합니다적으라",
            minLength: 10,
            validate: (value) => value.includes("nico") ? "nico안돼" : true,
          })}
          placeholder="pw1"
        ></input>
        <span>{errors.password?.message}</span>
        <input
          {...register("email", {
            required: "필요합니다",
            minLength: { value: 12, message: "12글자 이상하세요" },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "네이버만 받습니다 네이버들어가게해주세요",
            },
          })}
          placeholder="이메일네이버인데  12글자이사입!"
        ></input>
        <span>{errors.email?.message}</span>

        <input {...register("password2")} placeholder="pw2 확인"></input>
        <span>{errors.password2?.message}</span>
        <button>추가</button>
        <span>{errors.extraErrors?.message}</span>
      </form>
    </div>
  );
}
export default ToDoList;
