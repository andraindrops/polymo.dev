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
          <h2 className="text-2xl">Polymo is a web app code base generator for development x10 faster.</h2>
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
              <Stack className="sm:grid-cols-2">
                <Feature
                  title="Form"
                  description={
                    <>
                      Basic input form and validation with <Link href="https://react-hook-form.com/">React Hook Form</Link>.
                    </>
                  }
                />
                <Feature
                  title="Auth"
                  description={
                    <>
                      Sign in / up features and check auth in pages with <Link href="https://next-auth.js.org/">NextAuth</Link>.
                    </>
                  }
                />
                <Feature
                  title="GraphQL"
                  description={
                    <>
                      GraphQL client / server codes with <Link href="https://www.graphql-code-generator.com/">GraphQL Code Generator.</Link>
                    </>
                  }
                />
                <Feature
                  title="Database"
                  description={
                    <>
                      Using ORM and migration with <Link href="https://www.prisma.io/">Prisma</Link> and <Link href="https://www.docker.com/">Docker</Link>.
                    </>
                  }
                />
                <Feature
                  title="Styling"
                  description={
                    <>
                      Layout style rules and <Link href="https://tailwindcss.com/">Tailwind</Link> and <Link href="https://daisyui.com/">daisyUI</Link> settings.
                    </>
                  }
                />
                <Feature
                  title="Formatting"
                  description={
                    <>
                      Code format rules with <Link href="https://prettier.io/">Prettier</Link> and <Link href="https://eslint.org/">ESLint</Link>.
                    </>
                  }
                />
              </Stack>
            </Stack>
            <Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">CRUD scaffolding</h3>
                <p>
                  You can build CRUD view and form and GraphQL server / client codes with <Link href="https://github.com/cats-oss/scaffdog">scaffdog</Link>.
                </p>
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
