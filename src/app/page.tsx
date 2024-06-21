import Link from "next/link"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <span className="sr-only">Plagiarism Detector</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Início
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Serviços
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Compare
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">PlagWatch: Detecte plágio com facilidade</h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Garanta a originalidade de seu trabalho com nossos serviços abrangentes de detecção de plágio.
                    Compare os principais provedores e encontre o mais adequado para suas necessidades.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                    prefetch={false}
                  >
                    Explore Serviços
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700"
                    prefetch={false}
                  >
                    Compare Fornecedores
                  </Link>
                </div>
              </div>
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="550"
                height="310"
                alt="Plagiarism Detection"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center justify-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Principais serviços de detecção de plágio
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Compare as principais ferramentas de detecção de plágio e encontre a mais adequada às suas
                  necessidades.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Turnitin</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Detecção de plágio líder do setor com tecnologia avançada de IA.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Copyscape</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Detecção de plágio acessível com foco em conteúdo da Web.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Grammarly</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Assistente de redação abrangente com detecção de plágio.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Duplichecker</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Verificador de plágio gratuito com foco em conteúdo da Web.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Quetext</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Detecção avançada de plágio com foco na redação acadêmica.
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Plagscan</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Detecção abrangente de plágio para uso acadêmico e profissional.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center justify-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Compare serviços de detecção de plágio
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Encontre a melhor ferramenta de detecção de plágio para suas necessidades, comparando os principais
                  fornecedores.
                </p>
              </div>
              <div className="w-full max-w-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Serviços</TableHead>
                      <TableHead>Verificação de plágio</TableHead>
                      <TableHead>Verificação de gramática e ortográfica</TableHead>
                      <TableHead>Detecção de paráfrases</TableHead>
                      <TableHead>Verificação de citações e referências</TableHead>
                      <TableHead>Integração com LMS</TableHead>
                      <TableHead>Preço</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Link href="#" prefetch={false}>
                          Turnitin
                        </Link>
                      </TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>$25 - $100+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" prefetch={false}>
                          Copyscape
                        </Link>
                      </TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>$5 - $49</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" prefetch={false}>
                          Grammarly
                        </Link>
                      </TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>$12 - $30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" prefetch={false}>
                          Duplichecker
                        </Link>
                      </TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Free - $9.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" prefetch={false}>
                          Quetext
                        </Link>
                      </TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Não</TableCell>
                      <TableCell>$10 - $40</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" prefetch={false}>
                          Plagscan
                        </Link>
                      </TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>Sim</TableCell>
                      <TableCell>$10 - $99</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white">
        <p className="text-xs">&copy; 2024 PlagWatch. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Política de privacidade
          </Link>
          <Link href="#" className="text" prefetch={false} />
        </nav>
      </footer>
    </div>
  )
}
