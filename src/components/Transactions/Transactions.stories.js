import React from 'react';
import { TransactionProvider } from 'context/context';
import Transactions from './Transactions';
import * as TransactionStories from '../Transaction/Transaction.stories';

export default {
  title: 'Transactions',
  component: Transactions,
  decorators: [
    (story) => (
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    ),
  ],
};

const Template = (args) => <Transactions {...args} />;

export const WithTransactions = Template.bind({});

WithTransactions.args = {
  transactions: [
    {
      ...TransactionStories.Default.args.transaction,
      id: 1,
      title: 'Transaction 1',
    },
    {
      ...TransactionStories.Default.args.transaction,
      id: 2,
      title: 'Transaction 2',
    },
    {
      ...TransactionStories.Default.args.transaction,
      id: 3,
      title: 'Transaction 3',
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  transactions: [],
};
