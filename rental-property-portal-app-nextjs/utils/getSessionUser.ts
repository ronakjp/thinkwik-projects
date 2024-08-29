import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { CustomSession } from "@/types/types";
export const getSessionUser = async (): Promise<CustomSession | null> => {
    try {
        const session: CustomSession | null = await getServerSession(authOptions);
        if (!session?.user || !session) {
            return null;
        }
        return session;
    } catch (error) {
        return null;
    }
};
