import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TransactionContext } from 'context/context';

const InputText = ({ name, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} />
    </div>
  );
};

const TransactionForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Transaction Name"
          defaultValue="Transaction name"
          {...register('transactionName')}
        />
        <div className="form_control w-full flex px-10 py-4 mx-auto mb-10 shadow-lg rounded-md bg-blue-dark text-white flex-column">
          {/* <button type="submit" onClick={cancelHandler}>
          Cancel
        </button> */}
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </>
  );
};

export default TransactionForm;
