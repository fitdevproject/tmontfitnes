import { useState, useEffect } from "react";
import Link from "next/link";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { IoIosFlame } from "react-icons/io";
import { GiMeat, GiMeal } from "react-icons/gi";
const MacroCalculator = () => {
  const [dailyCalories, setDailyCalories] = useState(0);
  const [dailyFats, setDailyFats] = useState(0);
  const [dailyCarbs, setDailyCarbs] = useState(0);
  const [dailyProtein, setDailyProtein] = useState(0);

  const calculateCalories = (
    age,
    goal,
    gender,
    feet,
    inches,
    goalWeight,
    currentWeight,
    activityLevel
  ) => {
    //Local variables
    let height = getHeightInInches(feet, inches);
    let bmr;
    let neat;
    let calorieTotal;
    let proteinCalories;
    let fatCalories;
    let carbs;
    let tdee; //Maintenance calories

    //Calculate BMR
    //Women BMR = 655 + (9.6 * weight in kg) + (1.8 * height in cm) - (4.7 * age in yrs)
    //Men BMR = 66 + (13.7 * weight in kg) + (5 * height in cm) - (6.8 * age in yrs)
    if (gender === "Female") {
      bmr =
        655 +
        (9.6 * parseInt(currentWeight)) / 2.2 +
        1.8 * parseFloat(height) * 2.54 -
        4.7 * parseInt(age);
      console.log("BMR is: ", bmr);

      //Calculate TDEE(maintenance)
      //BMR * activity level
      if (activityLevel === "Sedentary") {
        neat = 1.2;
        tdee = bmr * neat;
      }
      if (activityLevel === "Lightly Active") {
        neat = 1.375;
        tdee = bmr * neat;
      }
      if (activityLevel === "Moderately Active") {
        neat = 1.55;
        tdee = bmr * neat;
      }
      if (activityLevel === "Very Active") {
        neat = 1.725;
        tdee = bmr * neat;
      }
      if (activityLevel === "Extremely Active") {
        neat = 1.9;
        tdee = bmr * neat;
      }
      console.log("Tdee is:", tdee);

      //Calculate macros based on goal

      //Fat loss is tdee * 20%
      //Protein is goal weight * 1 for men, goal weight * .8 for women || protein * 4 = calories for protein
      //Fat is .3 * current weight || fat * 9 = calories for fat
      //Carbs is Total calories - (protein calories + fat calorires) / 4

      //Maintain is tdee
      //Protein is current weight * 1 for men, current weight * .8 for women || protein * 4 = calories for protein
      //Fat is .3 * current weight || fat * 9 = calories for fat
      //Carbs is Total calories - (protein calories + fat calorires) / 4

      //Gain muscle is tdee + 200
      //Protein is current weight * 1 for men, current weight * .8 for women || protein * 4 = calories for protein
      //Fat is .3 * current weight || fat * 9 = calories for fat
      //Carbs is Total calories - (protein calories + fat calorires) / 4

      if (goal === "Lose Fat") {
        calorieTotal = parseInt(tdee - tdee * 0.2);
        setDailyCalories(calorieTotal);
        setDailyProtein(Math.trunc(parseInt(goalWeight) * 0.8));
        let p = Math.trunc(parseInt(goalWeight) * 0.8);
        proteinCalories = p * 4;
        console.log("protein calories: ", proteinCalories);
        setDailyFats(Math.trunc(parseInt(currentWeight) * 0.3));
        let f = Math.trunc(parseInt(currentWeight) * 0.3);
        fatCalories = f * 9;
        console.log("fat calories: ", fatCalories);
        carbs = (calorieTotal - (proteinCalories + fatCalories)) / 4;
        setDailyCarbs(parseInt(carbs));
      }
      if (goal === "Maintain") {
        setDailyCalories(parseInt(tdee));
        setDailyProtein(Math.trunc(parseInt(goalWeight) * 0.8));
        let p = Math.trunc(parseInt(goalWeight) * 0.8);
        proteinCalories = p * 4;
        setDailyFats(Math.trunc(parseInt(currentWeight) * 0.3));
        let f = Math.trunc(parseInt(currentWeight) * 0.3);
        fatCalories = f * 9;
        carbs = (tdee - (proteinCalories + fatCalories)) / 4;
        setDailyCarbs(parseInt(carbs));
      }

      if (goal === "Build Muscle") {
        calorieTotal = tdee + 200;
        setDailyCalories(parseInt(calorieTotal));
        setDailyProtein(Math.trunc(parseInt(goalWeight) * 0.8));
        let p = Math.trunc(parseInt(goalWeight) * 0.8);
        proteinCalories = p * 4;
        setDailyFats(Math.trunc(parseInt(currentWeight) * 0.3));
        let f = Math.trunc(parseInt(currentWeight) * 0.3);
        fatCalories = f * 9;
        carbs = (calorieTotal - (proteinCalories + fatCalories)) / 4;
        setDailyCarbs(parseInt(carbs));
      }
    }

    //Calculate BMR
    //Women BMR = 655 + (9.6 * weight in kg) + (1.8 * height in cm) - (4.7 * age in yrs)
    //Men BMR = 66 + (13.7 * weight in kg) + (5 * height in cm) - (6.8 * age in yrs)
    if (gender === "Male") {
      bmr =
        66 +
        (13.7 * parseInt(currentWeight)) / 2.2 +
        5 * parseFloat(height) * 2.54 -
        6.8 * parseInt(age);

      //Calculate TDEE(maintenance)
      //BMR * activity level
      if (activityLevel === "Sedentary") {
        neat = 1.2;
        tdee = bmr * neat;
      }
      if (activityLevel === "Lightly Active") {
        neat = 1.375;
        tdee = bmr * neat;
      }
      if (activityLevel === "Moderately Active") {
        neat = 1.55;
        tdee = bmr * neat;
      }
      if (activityLevel === "Very Active") {
        neat = 1.725;
        tdee = bmr * neat;
      }
      if (activityLevel === "Extremely Active") {
        neat = 1.9;
        tdee = bmr * neat;
      }

      //Calculate macros based on goal

      //Fat loss is tdee * 20%
      //Protein is goal weight * 1 for men, goal weight * .8 for women || protein * 4 = calories for protein
      //Fat is .3 * current weight || fat * 9 = calories for fat
      //Carbs is Total calories - (protein calories + fat calorires) / 4

      //Maintain is tdee
      //Protein is current weight * 1 for men, current weight * .8 for women || protein * 4 = calories for protein
      //Fat is .3 * current weight || fat * 9 = calories for fat
      //Carbs is Total calories - (protein calories + fat calorires) / 4

      //Gain muscle is tdee + 200
      //Protein is current weight * 1 for men, current weight * .8 for women || protein * 4 = calories for protein
      //Fat is .3 * current weight || fat * 9 = calories for fat
      //Carbs is Total calories - (protein calories + fat calorires) / 4

      if (goal === "Lose Fat") {
        calorieTotal = parseInt(tdee - tdee * 0.2);
        setDailyCalories(calorieTotal);
        setDailyProtein(Math.trunc(parseInt(goalWeight) * 1));
        let p = Math.trunc(parseInt(goalWeight) * 1);
        proteinCalories = p * 4;
        setDailyFats(Math.trunc(parseInt(currentWeight) * 0.3));
        let f = Math.trunc(parseInt(currentWeight) * 0.3);
        fatCalories = f * 9;
        carbs = (calorieTotal - (proteinCalories + fatCalories)) / 4;
        setDailyCarbs(parseInt(carbs));
      }
      if (goal === "Maintain") {
        setDailyCalories(parseInt(tdee));
        setDailyProtein(Math.trunc(parseInt(goalWeight) * 1));
        let p = Math.trunc(parseInt(goalWeight) * 1);
        proteinCalories = p * 4;
        setDailyFats(Math.trunc(parseInt(currentWeight) * 0.3));
        let f = Math.trunc(parseInt(currentWeight) * 0.3);
        fatCalories = f * 9;
        carbs = (tdee - (proteinCalories + fatCalories)) / 4;
        setDailyCarbs(parseInt(carbs));
      }

      if (goal === "Build Muscle") {
        calorieTotal = tdee + 200;
        setDailyCalories(parseInt(calorieTotal));
        setDailyProtein(Math.trunc(parseInt(goalWeight) * 1));
        let p = Math.trunc(parseInt(goalWeight) * 1);
        proteinCalories = p * 4;
        setDailyFats(Math.trunc(parseInt(currentWeight) * 0.3));
        let f = Math.trunc(parseInt(currentWeight) * 0.3);
        fatCalories = f * 9;
        carbs = (calorieTotal - (proteinCalories + fatCalories)) / 4;
        setDailyCarbs(parseInt(carbs));
      }
    }
  };

  const getHeightInInches = (feet, inches) => {
    let inchesToReturn = parseInt(feet) * 12 + parseInt(inches);
    return inchesToReturn;
  };

  const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col md:w-96 w-80">
        <label
          className="text-tmontGreen-100 mt-6 mb-2 font-bold"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        <input
          className={
            meta.touched && meta.error
              ? "mr-2 appearance-none  py-2 placeholder:text-neutral-50 px-2 rounded border-red-500 border-2 h-auto text-neutral-50 bg-tmontGray-100"
              : "mr-2 appearance-none  py-2 placeholder:text-neutral-50 px-2 rounded h-auto border-2 border-neutral-50 text-neutral-50 bg-tmontGray-100"
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

  const MyFeetTextInput = ({ ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col md:w-48 w-40">
        <input
          className={
            meta.touched && meta.error
              ? "mr-2 appearance-none  py-2 placeholder:text-neutral-50 px-2 rounded border-red-500 border-2 h-auto text-neutral-50 bg-tmontGray-100"
              : "mr-2 appearance-none  py-2 placeholder:text-neutral-50 px-2 rounded h-auto border-2 border-neutral-50 text-neutral-50 bg-tmontGray-100"
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

  const MyInchesTextInput = ({ ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col md:w-48 w-40">
        <input
          className={
            meta.touched && meta.error
              ? "mr-2 appearance-none  py-2 placeholder:text-neutral-50 px-2 rounded border-red-500 border-2 h-auto text-neutral-50 bg-tmontGray-100"
              : "mr-2 appearance-none  py-2 placeholder:text-neutral-50 px-2 rounded h-auto border-2 border-neutral-50 text-neutral-50 bg-tmontGray-100"
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
          className="text-tmontGreen-100 mt-6 mb-2 font-bold"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        <select
          className={
            meta.touched && meta.error
              ? "cursor-pointer mr-2 appearance-none   py-2 placeholder:text-neutral-50 px-2 rounded border-red-500 border-2 h-auto text-neutral-50 bg-tmontGray-100"
              : "cursor-pointer mr-2 appearance-none  py-2 placeholder:text-neutral-50 px-2 rounded h-auto border-2 border-neutral-50 text-neutral-50 bg-tmontGray-100"
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dailyCalories, dailyProtein, dailyCarbs, dailyFats]);
  return (
    <>
      <h1 className="block mx-auto my-8 text-center text-neutral-50 text-3xl">
        Macro Calculator
      </h1>
      {dailyCalories === 0 &&
      dailyProtein === 0 &&
      dailyCarbs === 0 &&
      dailyFats === 0 ? (
        <Formik
          initialValues={{
            age: "",
            feet: "",
            inches: "",
            gender: "",
            goal: "",
            activityLevel: "",
            currentWeight: "",
            goalWeight: "",
          }}
          validationSchema={Yup.object({
            age: Yup.number()
              .typeError("Enter a valid number")
              .positive("Must be more than 0")
              .integer("Must be an integer")
              .required("This field is required"),
            gender: Yup.string().required("This field is required"),
            feet: Yup.number()
              .typeError("Enter a valid number")
              .lessThan(10, "Must be between 1-9 feet")
              .moreThan(0, "Must be between 1-9 feet")
              .integer("Must be an integer")
              .required("This field is required"),
            inches: Yup.number()
              .typeError("Enter a valid number")
              .lessThan(12, "Must be between 0-11 inches")
              .moreThan(-1, "Must be between 0-11 inches")
              .integer("Must be an integer")
              .required("This field is required"),
            goal: Yup.string().required("This field is required"),
            activityLevel: Yup.string().required("This field is required"),
            currentWeight: Yup.number()
              .typeError("Enter a valid number")
              .positive("Must be more than 0")
              .integer("Must be an integer")
              .required("This field is required"),
            goalWeight: Yup.number()
              .typeError("Enter a valid number")
              .positive("Must be more than 0")
              .integer("Must be an integer")
              .required("This field is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            calculateCalories(
              values.age,
              values.goal,
              values.gender,
              values.feet,
              values.inches,
              values.goalWeight,
              values.currentWeight,
              values.activityLevel
            );

            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-center">
              <MyTextInput
                label="Age"
                name="age"
                type="text"
                placeholder="Enter your age"
              />
              <MySelect label="Gender" name="gender">
                <option value="">Select a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </MySelect>
              <div className="mt-6">
                <label className="text-tmontGreen-100 font-bold">Height</label>
                <div className="flex mt-2">
                  <MyFeetTextInput name="feet" type="text" placeholder="feet" />
                  <MyInchesTextInput
                    name="inches"
                    type="text"
                    placeholder="inches"
                  />
                </div>
              </div>
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
              <MySelect label="Activity Level" name="activityLevel">
                <option value="">Select an activity level</option>
                {/* 1.2 */}
                <option value="Sedentary">
                  Sedentary - Little or no exercise
                </option>
                {/* 1.375 */}
                <option value="Lightly Active">
                  Lightly Active - Exercise 1-2 days per week
                </option>
                {/* 1.55 */}
                <option value="Moderately Active">
                  Moderately Active - Exercise 3-5 days per week
                </option>
                {/* 1.725 */}
                <option value="Very Active">
                  Very Active - Exercise 6-7 days per week
                </option>
                {/* 1.9 */}
                <option value="Extremely Active">
                  Extremely Active - Heavy exercise, hard labor job, training 2x
                  / day
                </option>
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

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-60 my-12 py-2 px-4 rounded text-tmontGray-100 bg-tmontGreen-100 hover:scale-110"
              >
                Calculate
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="flex flex-col items-center">
          <div className="bg-neutral-400 px-4 py-4 w-80 md:w-2/3 md:flex md:flex-col md:justify-evenly rounded mb-4 md:mb-6">
            <div className="mb-2">
              <h1 className="text-neutral-800 text-2xl text-center">Results</h1>
              <hr className="mt-4" />
            </div>

            <div className="md:flex md:items-center justify-evenly md:mt-8 md:mb-6">
              <div className="mb-1 md:mb-2">
                <h1 className="text-neutral-800 text-2xl md:text-center">
                  Calories:
                </h1>
              </div>
              <div className="mb-1 md:mb-0 flex ">
                <div className="flex">
                  <div className="flex ">
                    <h1 className="text-neutral-800 mr-2">
                      Daily Calorie Target:
                    </h1>
                    <p className="text-neutral-800 text-center font-bold">
                      {dailyCalories}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-1 md:mb-0 flex ">
                <div className="flex">
                  <div className="flex ">
                    <h1 className="text-neutral-800 mr-2">
                      Weekly Calorie Target:
                    </h1>
                    <p className="text-neutral-800 text-center font-bold">
                      {numberWithCommas(dailyCalories * 7)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex md:items-center justify-evenly md:mb-8">
              <div className="mb-1 md:mb-2">
                <h1 className="text-neutral-800 text-2xl md:text-center">
                  Macros:
                </h1>
              </div>
              <div className="mb-1 md:mb-0 flex ">
                <div className="flex">
                  <div className="flex ">
                    <h1 className="text-neutral-800 mr-2">Protein:</h1>

                    <p className="text-neutral-800 text-center font-bold">
                      {dailyProtein}g
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-1 md:mb-0 flex ">
                <div className="flex">
                  <div className="flex ">
                    <h1 className="text-neutral-800 mr-2">Carbs:</h1>

                    <p className="text-neutral-800 text-center font-bold">
                      {dailyCarbs}g
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-1 md:mb-0 flex ">
                <div className="flex">
                  <div className="flex ">
                    <h1 className="text-neutral-800 mr-2">Fats:</h1>

                    <p className="text-neutral-800 text-center font-bold">
                      {dailyFats}g
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                setDailyCalories(0);
                setDailyProtein(0);
                setDailyCarbs(0);
                setDailyFats(0);
              }}
              type="button"
              className="w-60 my-4 py-2 px-4 rounded text-tmontGray-100 bg-tmontGreen-100 hover:scale-110"
            >
              Recalculate
            </button>
          </div>
          <div className="px-4 py-4 w-96 md:w-4/5 mb-8">
            <p className=" text-xl font-bold text-tmontGreen-100">
              Calorie Target:
            </p>
            <p className="mt-2 text-neutral-50 mb-4">
              Your daily calorie goal is the amount of calories you should aim
              to eat each day. Your total calories for the week has also been
              calculated and shown above. Knowing your weekly caloric intake is
              a very powerful tool, because it allows you to have days where you
              either consume less than or more than your calorie goal for the
              day and still be compliant to your overall weekly calorie goal.
              This is very useful in scenarios where life happens, and you
              simply just want to enjoy yourself. No harm no foul, since you
              know your total calorie goal for the week.
            </p>
            <p className=" text-xl font-bold text-tmontGreen-100">
              Protein Target:
            </p>
            <p className="mt-2 text-neutral-50 mb-4">
              Your daily protein target is the most important number to hit.
              Calories from protein should be prioritized, because they will
              help you feel more full throughout each day. Protein is also the
              building block for your muscles. It is going to be important to
              hit your protein goal each day to either hold onto or gain muscle
              depending on the goal you have chosen.
            </p>
            <p className="text-tmontGreen-100 text-xl font-bold">
              Fat and Carb Target:
            </p>
            <p className="mt-2 text-neutral-50 mb-4">
              Although a carb and fat estimate was given to you, your daily fat
              and carb target is up to you. As long as you are hitting your
              protein and calorie goal, the amount of carb vs fat does not
              matter. Some do better with higher carb, and some do better with
              lower carb. We are following more of a flexible approach to
              dieting, because I do not believe in forcing someone into a super
              restrictive lifestyle by following a diet where a macro nutrient
              is entirely cut out for the sake of losing weight.
            </p>
            <p className="text-sm text-neutral-50 mb-4">
              * This calculation is an estimation based on the information you
              have provided. If your goal is to lose fat or build muscle and you
              are gaining or losing too quickly, add or subtract 100 calories a
              day per week until you are losing or gaining 1-2lbs per week. If
              your goal is to maintain and you are gaining or losing vice
              maintaining, add or subtract 100 calories per week until you are
              maintaining. Example of how to manipulate your calories: Lets say
              you are eating 2000 calories a day, and the first week of eating
              this many calories you lost more than 1-2 pounds. The following
              week you would add 100 calories to your daily total. Instead of
              2000 calories per day, you would now eat 2100 calories per day.
              The next week if you still are losing more than 1-2 pounds, add
              another 100 calories. You would now be eating 2200 calories per
              day. Remember your weekly total will also increase as well. Just
              take your daily total multiplied by 7 to refigure this. You can do
              this with whichever goal you decided upon, just either add or
              subtract depending on if you are losing or gaining too fast.
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
