-- CreateTable
CREATE TABLE "Cofe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "des" TEXT NOT NULL,

    CONSTRAINT "Cofe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagCafe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cofeId" INTEGER NOT NULL,

    CONSTRAINT "TagCafe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TagCafe" ADD CONSTRAINT "TagCafe_cofeId_fkey" FOREIGN KEY ("cofeId") REFERENCES "Cofe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
