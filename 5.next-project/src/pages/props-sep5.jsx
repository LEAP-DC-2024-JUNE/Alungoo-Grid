import { Text } from "@/components/Text";

const Home = () => {
  return (
    <div>
      <Text />
      <Text title="from parent component" />
      <Text title="test" description="desc1" color="blue" />
    </div>
  );
};
export default Home;
