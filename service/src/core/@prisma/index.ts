import { PrismaClient } from "@prisma/client/edge";

class PrismaInstance {
  private prisma: PrismaClient;
  constructor(primc: PrismaClient) {
    this.prisma = primc;
  }

  public getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}

export default PrismaInstance;
