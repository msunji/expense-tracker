import React from 'react';
import Transaction from './Transaction';

export default {
  title: 'Transaction',
  component: Transaction,
  decorators: [
    (Story) => (
      <main className="mx-auto px-3 max-w-2xl">
        <Story />
      </main>
    ),
  ],
};

const Template = (args) => <Transaction {...args.transactions} />;

export const Default = Template.bind({});

Default.args = {
  transactions: {
    transactionName: 'Cat food',
    amount: 1200,
    type: 'expense',
    id: 1,
  },
};
