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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {}, [dailyCalories, dailyProtein]);
  return (
    <>
      <h1 className="block mx-auto my-4 text-center text-neutral-50 text-3xl">
        Macro Calculator
      </h1>
      {dailyCalories === 0 && dailyProtein === 0 ? (
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
            currentWeight: Yup.number()
              .typeError("Enter a valid number")
              .required("Current Weight is Required"),
            goalWeight: Yup.number()
              .typeError("Enter a valid number")
              .required("Goal Weight is Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            calculateCalories(
              values.goal,
              values.goalWeight,
              values.currentWeight,
              values.activityLevel
            );
            calculateProteinGoal(values.gender, values.goalWeight);

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
      ) : (
        <div className="flex flex-col items-center">
          <div className="bg-neutral-400 px-4 py-4 w-80 md:w-2/3 md:h-60 md:flex md:flex-col md:justify-evenly rounded mb-6">
            <div className="mb-2">
              <h1 className="text-neutral-800 text-2xl text-center">Results</h1>
              <hr className="mt-4" />
            </div>
            <div className="md:flex md:items-center justify-evenly">
              <div className="px-2 py-2 flex md:flex-col">
                <h1 className="text-neutral-800 mr-2 md:m-0">
                  Daily Calorie Target:
                </h1>
                <p className="text-neutral-800 text-center font-bold">
                  {dailyCalories}
                </p>
              </div>
              <div className="px-2 py-2 flex md:flex-col">
                <h1 className="text-neutral-800 mr-2 md:m-0">
                  Daily Protein Target:
                </h1>
                <p className="text-neutral-800 text-center font-bold">
                  {dailyProtein}
                </p>
              </div>
              <div className="px-2 py-2 flex md:flex-col">
                <h1 className="text-neutral-800 mr-2 md:m-0">
                  Weekly Calorie Target:
                </h1>
                <p className="text-neutral-800 text-center font-bold">
                  {numberWithCommas(dailyCalories * 7)}
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 w-96 md:w-4/5 mb-8">
            <p className=" text-xl font-bold text-green-500">Calorie Target:</p>
            <p className="mt-2 text-neutral-50 mb-4">
              Your daily calorie goal is the amount of calories you should aim
              to eat each day. Your total calories for the week has also been
              calculated and shown above. Knowing your weekly caloric intake is
              a very powerful tool, because it allows you to have days where you
              either consume less than or more than your calorie goal for the
              day and still be compliant to your overall calorie goal. This is
              very useful in scenarios where life happens, and you simply just
              want to enjoy yourself. No harm no foul, since you know your total
              calorie goal for the week.
            </p>
            <p className=" text-xl font-bold text-green-500">Protein Target:</p>
            <p className="mt-2 text-neutral-50 mb-4">
              Your daily protein target is the most important number to hit.
              Calories from protein should be prioritized, because they will
              help you feel more full throughout each day. Protein is also the
              building block for your muscles. It is going to be important to
              hit your protein goal each day to either hold onto or gain muscle
              depending on the goal you have chosen.
            </p>
            <p className="text-green-500 text-xl font-bold">
              Fat and Carb Target:
            </p>
            <p className="mt-2 text-neutral-50 mb-4">
              Your daily fat and carb target is up to you. As long as you are
              hitting your protein and calorie goal, the amount of carb vs fat
              does not matter. Some do better with higher carb, and some do
              better with lower carb. We are following more of a flexible
              approach to dieting, because I do not believe in forcing someone
              into a super restrictive lifestyle by following a diet where a
              macro nutrient is entirely cut out for the sake of losing weight.
            </p>
            <p className="text-sm text-neutral-50 mb-4">
              * This calculation is an estimation based on the information you
              have provided. If your goal is to lose fat or build muscle and you
              are gaining or losing too quickly, add or subtract 100 calories
              per week until you are losing or gaining 1-2lbs per week. If your
              goal is to maintain and you are gaining or losing vice
              maintaining, add or subtract 100 calories per week until you are
              maintaining.
            </p>
            <p className="text-sm text-neutral-50">
              * You should always consult with a health professional before
              following any diet.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MacroCalculator;
