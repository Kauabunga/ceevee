export default function Text({ children }) {
  const text = children.replace(/\s+(?=\S*$)/, "\u00A0");
  return text;
}
