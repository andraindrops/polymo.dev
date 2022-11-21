import Link from "next/link";
import Script from "next/script";

import { Layout } from "@/components/layout/Layout";

import { Stack } from "@/components/ui/layout/Stack";

interface FeatureProps {
  title: JSX.Element | JSX.Element[] | string;
  description: JSX.Element | JSX.Element[] | string;
}

const Feature = (props: FeatureProps) => {
  const { title, description } = props;

  return (
    <Stack className="rounded border border-solid bg-white p-4">
      <h4 className="font-bold">{title}</h4>
      <div>{description}</div>
    </Stack>
  );
};

const Page = (): JSX.Element => {
  return (
    <Layout>
      <Stack className="py-32">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M5342QWXSE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M5342QWXSE');
          `}
        </Script>
        <img src="/index/kv.svg" alt="kv" className="mx-auto max-h-60" />
        <h1 className="mt-8 text-6xl font-bold">Polymo</h1>
        <Stack className="mt-8">
          <h2 className="text-2xl">Polymo is Next.js full package boilerplate.</h2>
          <Stack>
            <Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">GitHub</h3>
                <Link href="https://github.com/andraindrops/polymo">https://github.com/andraindrops/polymo</Link>
              </Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">Features</h3>
                <p>We provide basic features with standard OSS.</p>
              </Stack>
              <Stack className="sm:grid-cols-1 font-mono">
                <Feature
                  title="Form"
                  description={
                    <>
                      <Link href="https://react-hook-form.com/">React Hook Form</Link>
                    </>
                  }
                />
                <Feature
                  title="Auth"
                  description={
                    <>
                      <Link href="https://next-auth.js.org/">NextAuth</Link>
                    </>
                  }
                />
                <Feature
                  title="GraphQL"
                  description={
                    <>
                      <Link href="https://www.graphql-code-generator.com/">GraphQL Code Generator</Link>
                    </>
                  }
                />
                <Feature
                  title="Database"
                  description={
                    <>
                      <Link href="https://www.prisma.io/">Prisma</Link> / <Link href="https://www.docker.com/">Docker</Link>
                    </>
                  }
                />
                <Feature
                  title="Styling"
                  description={
                    <>
                      <Link href="https://chakra-ui.com/">Chakra UI</Link>
                    </>
                  }
                />
                <Feature
                  title="Test / Link / Formatting"
                  description={
                    <>
                      <Link href="https://storybook.js.org/">Storybook</Link> / <Link href="https://jestjs.io/">Jest</Link> / <Link href="https://playwright.dev/">Playwright</Link> / <Link href="https://prettier.io/">Prettier</Link> / <Link href="https://eslint.org/">ESLint</Link> / <Link href="https://commitlint.js.org/#/">commitlint</Link> / <Link href="https://typicode.github.io/husky/#/">Husky</Link>.
                    </>
                  }
                />
              </Stack>
            </Stack>
            <Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">Getting Started</h3>
                <Link href="https://github.com/andraindrops/polymo#readme">https://github.com/andraindrops/polymo#readme</Link>
              </Stack>
            </Stack>
            <Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">Support</h3>
                <p>
                  We can help you, Please contact <Link href="https://github.com/andraindrops/polymo">GitHub</Link> or <Link href="https://twitter.com/polymo_dev">Twitter</Link>.
                </p>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Page;
