export function PaidTrials() {
  const templates = [
    'RAG eval harness',
    'Fine‑tune pipeline',
    'Data QA scripts',
    'GPU cost audit',
    'Eval dashboard',
    'Inference optimization',
  ]
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Start with Paid Trials (project‑to‑hire)</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((t) => (
            <div key={t} className="card card-hover">
              <div className="font-medium">{t}</div>
              <div className="text-sm text-white/60 mt-2">48–72h • outcome‑based • transparent budget</div>
              <button className="btn-primary mt-4 w-full">Invite to paid trial</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


