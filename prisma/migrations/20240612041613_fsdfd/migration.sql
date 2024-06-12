/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "dob" TIMESTAMP(3);
ALTER TABLE "Profile" ADD COLUMN     "link" STRING;
ALTER TABLE "Profile" ADD COLUMN     "location" STRING;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";
ALTER TABLE "User" ADD COLUMN     "displayname" STRING;
ALTER TABLE "User" ADD COLUMN     "username" STRING NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
