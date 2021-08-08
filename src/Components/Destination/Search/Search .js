import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../../App";


const Search = () => {
  const { register, handleSubmit } = useForm();
  const [search,setSearch] = useContext(UserContext);

  const onSubmit = (data) => {
    data.isSearched = true;
    setSearch(data)
  }
  console.log(search)


  return (
    <>

      <form className="card card-body p-5 m-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>Pick From</Form.Label>
        <input className="mb-3" placeholder="From" {...register("from")} required />
        <Form.Label>Pick To</Form.Label>
        <input className="mb-3" placeholder="To" {...register("to")} required />

        <Form.Label>Pick To</Form.Label>
        <input className="mb-3" placeholder="To" {...register("date")} type="date" required />


        <Button variant="primary" type="submit">Search</Button>

      </form>

    </>
  );
}
export default Search;
