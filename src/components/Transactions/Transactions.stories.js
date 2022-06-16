import React from 'react';
import Transactions from './Transactions';
import { withReactContext } from 'storybook-react-context';
import { TransactionContext } from 'context/context';
import * as Transaction from 'components/Transaction/Transaction.stories';

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

export default {
  title: 'Transactions',
  component: Transactions,
  argTypes: {
    variant: {
      options: ['empty', 'withTransactions'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    withReactContext({
      Context: TransactionContext,
      initialState: { globalState: [] },
    }),
  ],
  excludeStories: /.*MockedState$/,
};

const Template = (args) => <Transactions {...args.transactions} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'empty',
  transactions: [],
};

export const WithTransactions = Template.bind({});
WithTransactions.parameters = {
  reactContext: {
    initialState: {
      globalState: [],
    },
  },
};

WithTransactions.args = {
  variant: 'withTransactions',
  transactions: [
    {
      ...Transaction.Default.args.transaction,
      id: '1',
      title: 'Transaction 1',
    },
    {
      ...Transaction.Default.args.transaction,
      id: '2',
      title: 'Transaction 2',
    },
    {
      ...Transaction.Default.args.transaction,
      id: '3',
      title: 'Transaction 3',
    },
    {
      ...Transaction.Default.args.transaction,
      id: '4',
      title: 'Transaction 4',
    },
  ],
};
