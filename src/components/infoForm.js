import {
  Input,
  Checkbox,
  Button,
  Typography,
  Select, Option,
  Textarea,
  Radio
} from "@material-tailwind/react";
import { useFormik } from "formik";


const InfoForm = () => {


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      hobby: [],
      country: '',
      gender: '',
      msg: '',
      image: '',

    },
    onSubmit: (val) => {




    }
  });



  const checkData = [
    { label: 'Dance', name: 'dance', value: 'dance', color: 'blue', id: 'dance' },
    { label: 'Sing', name: 'sing', value: 'sing', color: 'red', id: 'sing' },
    { label: 'Coding', name: 'coding', value: 'coding', color: 'green', id: 'coding' },
    { label: 'Music', name: 'music', value: 'music', color: 'teal', id: 'music' },
  ];


  const selectData = [
    { label: 'Nepal', value: 'nepal' },
    { label: 'India', value: 'india', },
    { label: 'China', value: 'china', },
    { label: 'USA', value: 'USA' },
  ];

  return (
    <div className="max-w-xl shadow-2xl px-12 py-9 mx-auto ">

      <Typography color="gray" className="my-3 mb-6 text-2xl">
        Enter your Info
      </Typography>
      <form className="">
        <div className="mb-4 flex flex-col gap-6">


          <Input size="lg" label="Name" type="text" />
          <Input size="lg" label="Email" type="email" />

          <div className="space-y-2">
            <h1>Select Your Gender</h1>
            <Radio id="male" name="gender" label="Male" />
            <Radio id="female" name="gender" label="Female" />
          </div>


          <div className="space-y-2">
            <h1>Select Your Hobbies</h1>
            {checkData.map((c, i) => {
              return <Checkbox key={i} color={c.color} label={c.label} name={c.name} id={c.id} ></Checkbox>
            })}

          </div>



          <div className="space-y-2">
            <h1>Select Your Country</h1>
            <Select label="Select Country">
              {selectData.map((c, i) => {
                return <Option value={c.value} key={i}>{c.label}</Option>
              })}


            </Select>

          </div>

          <div >
            <Textarea label="Message" />
          </div>


          <div >

            <Input size="lg" label="Select Image" type="file" />
          </div>


        </div>

        <Button className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </div>
  )
}
export default InfoForm