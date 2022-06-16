import React from 'react';
import Transactions from './Transactions';
import { TransactionContext } from 'context/context';

export const MockState = {
  transactions: [
    {
      id: 1,
      transactionName: 'Transaction 1',
      amount: 2000,
    },
    {
      id: 2,
      transactionName: 'Transaction 2',
      amount: 5000,
    },
    {
      id: 3,
      transactionName: 'Transaction 3',
      amount: 13000,
    },
    {
      id: 4,
      transactionName: 'Transaction 4',
      amount: 2400,
    },
    {
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
