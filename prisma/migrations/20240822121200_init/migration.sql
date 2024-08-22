-- CreateTable
CREATE TABLE "PartnershipRequest" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "PartnershipRequest_pkey" PRIMARY KEY ("id")
);
