import React from 'react';
import Transactions from './Transactions';
import { TransactionContext } from 'context/context';
import * as Transaction from '../Transaction/Transaction.stories';

const dummyData = [
  {
    transactionName: 'Cat food',
    amount: 1200,
    type: 'expense',
    id: 1,
  },
  {
    transactionName: 'Income',
    amount: 13000,
    type: 'income',
    id: 2,
  },
  {
    transactionName: 'Phone bill - June',
    amount: 1400,
    type: 'expense',
    id: 3,
  },
];

export const MockState = {
  transactions: [
    {
      ...Transaction.Default.args.task,
      id: 1,
      transactionName: 'Transaction 1',
      amount: 2000,
    },
    {
      ...Transaction.Default.args.task,
      id: 2,
      transactionName: 'Transaction 2',
      amount: 5000,
    },
    {
      ...Transaction.Default.args.task,
      id: 3,
      transactionName: 'Transaction 3',
      amount: 13000,
    },
    {
      ...Transaction.Default.args.task,
      id: 4,
      transactionName: 'Transaction 4',
      amount: 2400,
    },
    {
      ...Transaction.Default.args.task,
      id: 5,
      transactionName: 'Transaction 5',
      amount: 1000,
    },
  ],
};

export default {
  title: 'Transactions',
  component: Transactions,
  decorators: [
    (Story) => (
      <main className="mx-auto px-3 max-w-2xl">
        <Story />
      </main>
    ),
  ],
  excludeStories: /.*MockState$/,
};

const Template = (args) => <Transactions {...args.transactions} />;

export const Default = Template.bind({});
Default.args = {
  transactions: [],
};
Default.decorators = [
  (Story) => (
    <TransactionContext.Provider value={{ globalState: [] }}>
      <Story />
    </TransactionContext.Provider>
  ),
];

export const WithTransactions = Template.bind({});
WithTransactions.args = {
  transactions: [],
};

WithTransactions.decorators = [
  (Story) => (
    <TransactionContext.Provider
      value={{ globalState: MockState.transactions }}
    >
      <Story />
    </TransactionContext.Provider>
  ),
];
