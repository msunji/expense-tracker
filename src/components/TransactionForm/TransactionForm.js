import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TransactionContext } from 'context/context';

const schema = yup
  .object({
    transactionName: yup.string().required(),
    amount: yup.number().positive().required(),
  })
  .required();

const InputText = ({ name, label }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className={classnames(
          'block',
          'mb-1',
          'text-sm',
          'text-gray',
          'tracking-wide'
        )}
      >
        {label}
        <sup className="text-red ml-1 text-md">*</sup>
      </label>
      <input
        type="text"
        name={name}
        className={classnames(
          'font-bold',
          'py-2',
          'rounded-md border-none',
          'bg-blue-light',
          'focus:border-blue focus:border-4'
        )}
      />
    </div>
  );
};

const InputRadio = ({ label }) => {
  return (
    <div className="inline-flex mr-3">
      <input
        type="radio"
        name="type"
        label={label}
        value={label}
        className={classnames('form-radio', 'mr-1')}
      />
      <span className="capitalize text-sm">{label}</span>
    </div>
  );
};

const TransactionForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          name="transactionName"
          label="Transaction Name"
          defaultValue="Transaction name"
          {...register('transactionName')}
        />
        <InputText
          label="Amount"
          name="amount"
          defaultValue="Amount"
          {...register('amount')}
        />
        <InputRadio label="income" {...register('type', { required: true })} />
        <InputRadio label="expense" {...register('type', { required: true })} />
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
