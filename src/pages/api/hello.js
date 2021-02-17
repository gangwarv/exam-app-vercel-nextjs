// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSSRContext } from "aws-amplify";
export default async (req, res) => {
  const { Auth } = withSSRContext({ req });
  const user = Auth.currentAuthenticatedUser();
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
