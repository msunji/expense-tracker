import { useContext } from 'react';
import { TransactionContext } from 'context/context';
import Transaction from '../Transaction/Transaction';
import emptyImg from 'assets/img/sammy-money-tree-1.png';

const EmptyTransactions = () => {
  return (
    <div className="mt-20">
      <img
        src={emptyImg}
        className="max-w-[15rem] mx-auto mb-4"
        alt="Illustration of person watering a money tree"
      />
      <p className="text-center text-gray">
        Looks like you haven’t added any transactions yet.
        <br /> Click the ‘Add’ button to add a transaction.
      </p>
    </div>
  );
};

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

const Transactions = () => {
  const { globalState } = useContext(TransactionContext);

  return (
    <section>
      <div className="flex items-center place-content-between mb-8">
        <h1 className="font-bold text-blue-dark text-2xl ">Transactions</h1>
        Button goes here
      </div>

      {globalState.length === 0 && <EmptyTransactions />}
      <ul>
        {globalState.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </section>
  );
};

export default Transactions;
