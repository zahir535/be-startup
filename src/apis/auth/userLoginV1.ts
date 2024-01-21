import { Request, Response } from "express";
import { responseWrapper } from "../../common/responseWrapper";

export const userLoginV1 = (req: Request, res: Response) => {
  // logic to fetch and return users from the database
  // res.send("registerParticipantsV1");
  const dummyRes: string = "registerParticipantsV1";
  res.status(200).send(responseWrapper<string>(dummyRes, null));
};
