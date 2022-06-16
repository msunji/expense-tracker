import React from 'react';
import Transaction from './Transaction';

export default {
  title: 'Transaction',
  component: Transaction,
};

const Template = (args) => <Transaction {...args.transactions} />;

export const Default = Template.bind({});

Default.args = {
  transactions: {
    transactionName: 'Cat food',
    amount: 1200,
    type: 'expense',
    id: '1',
  },
};
