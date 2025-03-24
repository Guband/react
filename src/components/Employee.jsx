import EditEmployee from "./EditEmployee";


function Employee(props) {
return (
<div className="m-2 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img className="object-cover rounded-full h-[100px] w-[100px] mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">{props.name}</p>
      <p className="font-medium text-gray-500">{props.role}</p>
    </div>
    {props.editEmployee}
  </div>
</div>
)
}

export default Employee;

