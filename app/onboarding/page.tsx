import { redirect } from "next/navigation";
// import { authClient } from "@/app/_lib/auth-client";
// import { headers } from "next/headers";
import { getHomeData, getUserTrainData } from "@/app/_lib/api/fetch-generated";
import dayjs from "dayjs";
import { Chat } from "@/app/_components/chat";
import { getSessionServer } from "../_lib/get-session-server";

export default async function OnboardingPage() {
  // const session = await authClient.getSession({
  //   fetchOptions: {
  //     headers: await headers(),
  //   },
  // });
  const session = await getSessionServer();

  if (!session?.user) redirect("/auth");

  const [homeData, trainData] = await Promise.all([
    getHomeData(dayjs().format("YYYY-MM-DD")),
    getUserTrainData(),
  ]);

  // console.log("homeData status:", homeData.status);
  // console.log("trainData status:", trainData.status);
  // console.log(
  //   "activeWorkoutPlanId:",
  //   homeData.status === 200 ? homeData.data.activeWorkoutPlanId : "N/A",
  // );
  // console.log("trainData:", trainData.status === 200 ? trainData.data : "N/A");

  if (
    homeData.status === 200 &&
    trainData.status === 200 &&
    homeData.data.activeWorkoutPlanId &&
    trainData.data
  ) {
    redirect("/");
  }

  return (
    <Chat embedded initialMessage="Quero começar a melhorar minha saúde!" />
  );
}
