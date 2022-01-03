import { useState, useEffect } from "react";
import Link from "next/link";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
const MacroCalculator = () => {
  const [dailyCalories, setDailyCalories] = useState(0);
  const [dailyProtein, setDailyProtein] = useState(0);

  const calculateCalories = (
    goal,
    goalWeight,
    currentWeight,
    activityLevel
  ) => {
    if (goal === "Lose Fat") {
      setDailyCalories(parseInt(goalWeight) * 12);
    }
    if (goal === "Maintain") {
      if (activityLevel === "Sedentary") {
        setDailyCalories(parseInt(currentWeight) * 13);
      } else {
        setDailyCalories(parseInt(currentWeight) * 14);
      }
    }
    if (goal === "Build Muscle") {
      if (activityLevel === "Sedentary") {
        setDailyCalories(parseInt(currentWeight) * 15);
      } else {
        setDailyCalories(parseInt(currentWeight) * 16);
      }
    }
  };

  const calculateProteinGoal = (gender, goalWeight) => {
    if (gender === "Female") {
      setDailyProtein(Math.trunc(parseInt(goalWeight) * 0.8));
    } else {
      setDailyProtein(parseInt(goalWeight));
    }
  };

  const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col md:w-96 w-80">
        <label
          className="text-neutral-50 mt-4 font-bold"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        <input
          className={
            meta.touched && meta.error
              ? "m-0 appearance-none box-border py-2 placeholder:text-neutral-800 px-2 rounded border-red-500 h-auto bg-neutral-400"
              : "m-0 appearance-none box-border py-2 placeholder:text-neutral-800 px-2 rounded border-neutral-700 h-auto bg-neutral-400"
          }
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col md:w-96 w-80">
        <label
          className="text-neutral-50 mt-4 font-bold"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        <select
          className={
            meta.touched && meta.error
              ? "m-0 cursor-pointer bg-neutral-400 text-neutral-800 box-border py-2 px-2 h-auto rounded border-red-500 "
              : "m-0 cursor-pointer bg-neutral-400 text-neutral-800 box-border py-2 px-2 h-auto rounded border-neutral-700 "
          }
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  return (
    <>
      <h1 className="block mx-auto my-4 text-center text-neutral-50 text-3xl">
        Macro Calculator
      </h1>
      <Formik
        initialValues={{
          gender: "",
          goal: "",
          activityLevel: "",
          currentWeight: "",
          goalWeight: "",
        }}
        validationSchema={Yup.object({
          gender: Yup.string().required("Gender is Required"),
          goal: Yup.string().required("Goal is Required"),
          activityLevel: Yup.string().required("Activity Level is Required"),
          currentWeight: Yup.string().required("Current Weight is Required"),
          goalWeight: Yup.string().required("Goal Weight is Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          calculateCalories(
            values.goal,
            values.goalWeight,
            values.currentWeight,
            values.activityLevel
          );
          calculateProteinGoal(values.gender, values.goalWeight);
          alert(
            "You're calorie goal is:" +
              dailyCalories +
              " and your daily protein goal is: " +
              dailyProtein
          );
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center">
            <MySelect label="Gender" name="gender">
              <option value="">Select a gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </MySelect>
            <MySelect label="Goal" name="goal">
              <option value="">Select a goal</option>
              <option value="Lose Fat">
                Lost Fat - Lose 1-2 pounds per week
              </option>
              <option value="Build Muscle">
                Build Muscle - Gain 1-2 pounds per week
              </option>
              <option value="Maintain">
                Maintain - Maintain my current weight
              </option>
            </MySelect>
            <MySelect label="Activity Level" name="activityLevel">
              <option value="">Select an activity level</option>
              <option value="Sedentary">
                Sedentary - Little or no exercise
              </option>
              <option value="Lightly Active">
                Lightly Active - Exercise 1-2 days per week
              </option>
              <option value="Moderately Active">
                Moderately Active - Exercise 3-5 days per week
              </option>
              <option value="Extremely Active">
                Extremely Active - Exercise 6-7 days per week
              </option>
            </MySelect>
            <MyTextInput
              label="Current Weight"
              name="currentWeight"
              type="text"
              placeholder="Enter current weight"
            />
            <MyTextInput
              label="Goal Weight"
              name="goalWeight"
              type="text"
              placeholder="Enter goal weight"
            />
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-60 my-6 py-2 px-4 rounded bg-gradient-to-r from-green-500 to-green-700 text-neutral-700 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-900 hover:text-black"
            >
              Calculate
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MacroCalculator;
