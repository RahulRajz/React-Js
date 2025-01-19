import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onsubmit(data) {
    // Simulate API Call
    await new Promise((resolve)=> setTimeout(resolve,3000));
    console.log("Form Submit Successfully", data);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label>First Name: </label>
            <input
            className={errors.firstname ? "input-error" : ""}
              {...register("firstname", {
                required: true,
                minLength: {value:3, message: "enter name atLeast 3 character"},
                maxLength: {value:20, message: "name not more than 20 character"},
                pattern: {value: /^[A-Za-z]+$/i, message:"name must be follw the rule"},
              })}
            />   
          {errors.firstname && <p className="error-msg">{errors.firstname.message}</p>}
          </div>

          <br />

          <div>
            <label>Last Name: </label>
            <input {...register("lastname")} />
          </div>

          <br />
          <div>
            <label>Password: </label>
            <input {...register("password")} />
          </div>

          <br />

          <div>
            <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting": "Submit"} />
          </div>

        </form>
      </div>
    </>
  );
};
export default App;
