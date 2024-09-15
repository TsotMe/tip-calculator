export default function BillInput({ bill, setBill }) {
  return (
    <div className="bill-input">
      <span>How much the bill?</span>
      <input
        type="text"
        placeholder="Input bill here..."
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
