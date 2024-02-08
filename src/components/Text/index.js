export default function Text({ children }) {
  const text = children.trim().replace(/\s+(?=\S*$)/, "\u00A0");
  return text;
}
