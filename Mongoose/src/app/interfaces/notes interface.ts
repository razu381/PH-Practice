import { Types } from "mongoose";

interface INOTES {
  title: string;
  content: string;
  category: string;
  pinned: Boolean;
  tags: string;
  user: Types.ObjectId;
}
