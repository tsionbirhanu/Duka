import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing data
  await prisma.packageFeature.deleteMany();
  await prisma.package.deleteMany();
  await prisma.feature.deleteMany();
  await prisma.serviceCategory.deleteMany();

  // Create Web Design Service
  const webDesign = await prisma.serviceCategory.create({
    data: {
      name: "Web Design & Development",
      description:
        "Professional websites that combine stunning design with powerful functionality. From landing pages to complex web applications.",
    },
  });

  // Create features for Web Design
  const webFeatures = await Promise.all([
    prisma.feature.create({
      data: { name: "Pages", serviceCategoryId: webDesign.id },
    }),
    prisma.feature.create({
      data: { name: "Responsive Design", serviceCategoryId: webDesign.id },
    }),
    prisma.feature.create({
      data: { name: "CMS Integration", serviceCategoryId: webDesign.id },
    }),
    prisma.feature.create({
      data: { name: "SEO Optimization", serviceCategoryId: webDesign.id },
    }),
    prisma.feature.create({
      data: { name: "Custom Animations", serviceCategoryId: webDesign.id },
    }),
    prisma.feature.create({
      data: { name: "Support Duration", serviceCategoryId: webDesign.id },
    }),
  ]);

  // Create packages for Web Design
  const webBasic = await prisma.package.create({
    data: {
      name: "Basic",
      price: 15000,
      currency: "ETB",
      turnaroundDays: 7,
      serviceCategoryId: webDesign.id,
    },
  });

  const webStandard = await prisma.package.create({
    data: {
      name: "Standard",
      price: 35000,
      currency: "ETB",
      turnaroundDays: 14,
      serviceCategoryId: webDesign.id,
    },
  });

  const webPremium = await prisma.package.create({
    data: {
      name: "Premium",
      price: 75000,
      currency: "ETB",
      turnaroundDays: 21,
      serviceCategoryId: webDesign.id,
    },
  });

  // Add feature values for Basic package
  await Promise.all([
    prisma.packageFeature.create({
      data: {
        packageId: webBasic.id,
        featureId: webFeatures[0].id,
        value: "Up to 5",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webBasic.id,
        featureId: webFeatures[1].id,
        value: true,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webBasic.id,
        featureId: webFeatures[2].id,
        value: false,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webBasic.id,
        featureId: webFeatures[3].id,
        value: "Basic",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webBasic.id,
        featureId: webFeatures[4].id,
        value: false,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webBasic.id,
        featureId: webFeatures[5].id,
        value: "1 month",
      },
    }),
  ]);

  // Add feature values for Standard package
  await Promise.all([
    prisma.packageFeature.create({
      data: {
        packageId: webStandard.id,
        featureId: webFeatures[0].id,
        value: "Up to 10",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webStandard.id,
        featureId: webFeatures[1].id,
        value: true,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webStandard.id,
        featureId: webFeatures[2].id,
        value: true,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webStandard.id,
        featureId: webFeatures[3].id,
        value: "Advanced",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webStandard.id,
        featureId: webFeatures[4].id,
        value: "Basic",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webStandard.id,
        featureId: webFeatures[5].id,
        value: "3 months",
      },
    }),
  ]);

  // Add feature values for Premium package
  await Promise.all([
    prisma.packageFeature.create({
      data: {
        packageId: webPremium.id,
        featureId: webFeatures[0].id,
        value: "Unlimited",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webPremium.id,
        featureId: webFeatures[1].id,
        value: true,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webPremium.id,
        featureId: webFeatures[2].id,
        value: true,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webPremium.id,
        featureId: webFeatures[3].id,
        value: "Premium",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webPremium.id,
        featureId: webFeatures[4].id,
        value: "Advanced",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: webPremium.id,
        featureId: webFeatures[5].id,
        value: "6 months",
      },
    }),
  ]);

  // Create Branding Service
  const branding = await prisma.serviceCategory.create({
    data: {
      name: "Branding & Identity",
      description:
        "Complete brand identity solutions that make your business stand out. From logos to comprehensive brand guidelines.",
    },
  });

  // Create features for Branding
  const brandFeatures = await Promise.all([
    prisma.feature.create({
      data: { name: "Logo Concepts", serviceCategoryId: branding.id },
    }),
    prisma.feature.create({
      data: { name: "Revisions", serviceCategoryId: branding.id },
    }),
    prisma.feature.create({
      data: { name: "Brand Guidelines", serviceCategoryId: branding.id },
    }),
    prisma.feature.create({
      data: { name: "Business Cards", serviceCategoryId: branding.id },
    }),
    prisma.feature.create({
      data: { name: "Social Media Kit", serviceCategoryId: branding.id },
    }),
    prisma.feature.create({
      data: { name: "File Formats", serviceCategoryId: branding.id },
    }),
  ]);

  // Create packages for Branding
  const brandBasic = await prisma.package.create({
    data: {
      name: "Starter",
      price: 8000,
      currency: "ETB",
      turnaroundDays: 5,
      serviceCategoryId: branding.id,
    },
  });

  const brandPro = await prisma.package.create({
    data: {
      name: "Professional",
      price: 18000,
      currency: "ETB",
      turnaroundDays: 10,
      serviceCategoryId: branding.id,
    },
  });

  // Add feature values for Branding packages
  await Promise.all([
    prisma.packageFeature.create({
      data: {
        packageId: brandBasic.id,
        featureId: brandFeatures[0].id,
        value: "3 concepts",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandBasic.id,
        featureId: brandFeatures[1].id,
        value: "2 rounds",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandBasic.id,
        featureId: brandFeatures[2].id,
        value: false,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandBasic.id,
        featureId: brandFeatures[3].id,
        value: false,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandBasic.id,
        featureId: brandFeatures[4].id,
        value: false,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandBasic.id,
        featureId: brandFeatures[5].id,
        value: "PNG, JPG",
      },
    }),
  ]);

  await Promise.all([
    prisma.packageFeature.create({
      data: {
        packageId: brandPro.id,
        featureId: brandFeatures[0].id,
        value: "5 concepts",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandPro.id,
        featureId: brandFeatures[1].id,
        value: "Unlimited",
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandPro.id,
        featureId: brandFeatures[2].id,
        value: true,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandPro.id,
        featureId: brandFeatures[3].id,
        value: true,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandPro.id,
        featureId: brandFeatures[4].id,
        value: true,
      },
    }),
    prisma.packageFeature.create({
      data: {
        packageId: brandPro.id,
        featureId: brandFeatures[5].id,
        value: "All formats (AI, SVG, PNG, JPG, PDF)",
      },
    }),
  ]);

  console.log("✅ Database seeded successfully!");
  console.log(`   Created ${2} service categories`);
  console.log(`   Created ${5} packages`);
  console.log(`   Created ${12} features`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
