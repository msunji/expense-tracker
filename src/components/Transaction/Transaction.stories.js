import React from 'react';
import Transaction from './Transaction';

export default {
  title: 'Transaction',
  component: Transaction,
};

const Template = (args) => <Transaction {...args} />;

export const Default = Template.bind({});

Default.args = {
  transactionName: 'Cat food',
  amount: 1200,
  type: 'expense',
  id: '1',
};
