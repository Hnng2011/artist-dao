import Testimonial from '@component/UI/accordination';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Treasury Management via Smart Contract',
    answer:
      "The DAO treasury is safeguarded by a smart contract that holds all the fund's assets, including BNB and other tokens acquired during investments. The fund manager has the exclusive right to call the execute() function, protected by an onlyOwner modifier, allowing them to interact with other contracts on the BSC. This ensures the manager can seamlessly allocate funds, swap tokens, engage in yield farming, or participate in other DeFi strategies",
  },
  {
    question: 'Transaction Fees and Manager Incentives',
    answer:
      "To ensure ongoing motivation for fund managers, a 0.4% transaction fee is applied to all trades involving the BEP20 token. This fee is either automatically directed to the manager's wallet or allocated via a separate mechanism in the smart contract. Additionally, fund managers may receive a carry fee on profits when the fund matures, incentivizing them to maximize returns for token holders",
  },
  {
    question: 'Liquidity NFT Lock Mechanism',
    answer:
      "To provide initial liquidity for the PancakeSwap v3 pool, 100 million tokens are paired with BNB and deposited, generating a liquidity NFT representing ownership of the pool. This NFT is locked within the smart contract until the fund's expiry date, ensuring liquidity remains intact and the price floor is maintained throughout the fund's lifecycle",
  },
  {
    question: 'Fund Expiry Extension?',
    answer:
      'Before the fund’s expiry date, managers can extend its operation if they believe the market conditions or investments require more time to yield favorable returns. This flexibility allows the DAO to adapt to market dynamics and optimize its performance',
  },
];

const secondFaqs: FAQItem[] = [
  {
    question: 'Why Choose DAOs Run?',
    answer:
      'DAOs Run provides an innovative platform that allows users to effortlessly create and manage their own DAO-powered hedge funds. By combining accessibility, transparency, and security, DAOs Run redefines decentralized asset management',
  },
  {
    question: 'Is There a Cost?',
    answer:
      'No, creating a DAO on DAOs Run is completely free of charge. DAOs Run eliminates barriers to entry by allowing users to launch their DAO hedge funds without any upfront costs. This approach ensures that anyone can access the tools needed to raise capital and manage funds through decentralized smart contracts, fostering inclusivity and innovation in decentralized finance.',
  },
  {
    question: 'Need Assistance?',
    answer:
      'For any additional questions or inquiries, feel free to reach out to us on Telegram. Our team is here to provide support and help you navigate the process of creating and managing your DAO seamlessly. Join the conversation and get your questions answered today!',
  },
];

const FullSectionFaq = () => {
  return (
    <>
      <section className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-5 w-full ">
          <div className="col-span-2 p-6 lg:p-12 bg-neutral-500/10 z-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-neutral-100 mb-4 tracking-tight font-audiowide">
              How It Works
            </h2>
            <ol className="text-neutral-300 mb-8 list-decimal ml-4 space-y-4">
              <li>
                <span className="font-audiowide text-[#FFD700]">
                  Raising BNB to Launch the Fund:
                </span>
              </li>
              <span>
                DAO managers initiate fundraising on the Binance Smart Chain
                (BSC), accepting contributions in BNB. The funds raised will be
                entirely under the control of the fund manager, who has the
                flexibility to allocate and invest the BNB in various projects,
                tokens, or DeFi protocols within the BSC ecosystem or other
                compatible blockchain networks as deemed appropriate.
              </span>

              <li>
                <span className="font-audiowide text-[#FFD700]">
                  Issuance of BEP20 Token and Liquidity Mechanism:
                </span>
              </li>
              <span>
                Upon completion of the fundraising, the DAO mints a BEP20 token
                with a total supply of 1.1 billion tokens.
                <ol className="list-disc ml-4">
                  <li>
                    1 billion tokens are distributed to the participants who
                    contributed during the fundraising round.
                  </li>
                  <li>
                    100 million tokens (representing 1% of the total supply) are
                    allocated to a liquidity pool on PancakeSwap or a similar
                    AMM protocol that supports v3 features.
                  </li>
                  <li>
                    Price Floor: The liquidity pool is structured so that the
                    token's price cannot fall below the initial amount of BNB
                    raised, effectively creating a minimum price floor that
                    protects investors.
                  </li>
                </ol>
              </span>

              <li>
                <span className="font-audiowide text-[#FFD700]">
                  Fund Expiry Date and Extension Mechanism:
                </span>
              </li>
              <span>
                Each fund is assigned an expiry date when all trading and
                investment activities cease. On this date, the treasury's
                remaining assets are distributed pro rata to all token holders
                based on their token ownership. Fund managers have the option to
                extend the expiry date at any time by updating parameters in the
                smart contract, allowing for continued operation if market
                conditions are favorable.
              </span>
            </ol>
          </div>
          <div className="space-y-8 col-span-3 p-12 lg:px-20 bg-transparent">
            {faqs.map((faq) => (
              <div key={faq.question} className="pb-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium text-[#FFD700] font-audiowide tracking-tight">
                    {faq.question}
                  </h3>
                </div>

                <p className="text-neutral-400 mt-2 leading-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-6 space-y-2">
        {secondFaqs.map(({ question, answer }) => (
          <Testimonial title={question} content={answer} />
        ))}
      </div>
    </>
  );
};

export default FullSectionFaq;
