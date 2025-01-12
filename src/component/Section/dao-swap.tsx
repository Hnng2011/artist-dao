export default function DaoSwap({ tokenAddress }: { tokenAddress: string }) {
  return (
    <>
      <div className="h-full w-full">
        <iframe
          className="h-full w-full min-h-[700px] lg:min-h-0"
          src="https://pancakeswap.finance/?outputCurrency=0x9840652DC04fb9db2C43853633f0F62BE6f00f98&chainId=56&inputCurrency=BNB"
        />
      </div>
    </>
  );
}
