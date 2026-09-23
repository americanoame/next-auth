import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

;
import { prisma } from './prisma';


async function main() {
  const prisma = new PrismaClient();
  
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // 👈 added cleanup for course-related tables
  await prisma.stroke.deleteMany();
  await prisma.round.deleteMany();
  await prisma.hole.deleteMany();
  await prisma.course.deleteMany();
  // 👆 end added
  


  await prisma.user.createMany({ data: sampleData.users });


  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
