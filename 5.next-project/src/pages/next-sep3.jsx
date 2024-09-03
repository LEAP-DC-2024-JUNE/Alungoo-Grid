import Picture, { Text } from "../components/";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Picture />
        <Picture />
        <Picture />
      </div>

      <div>
        <Text />
      </div>
    </div>
  );
}
