import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="container-x">
        <p className="font-display text-9xl font-extrabold leading-none text-brand-yellow sm:text-[14rem]">404</p>
        <h1 className="mt-2 text-5xl sm:text-7xl">Essa série não existe.</h1>
        <p className="mt-5 max-w-lg text-lg text-muted">A página que você procura não foi encontrada. Volte ao início e continue o treino.</p>
        <Button href="/" className="mt-10">
          Voltar ao início
        </Button>
      </div>
    </section>
  );
}
