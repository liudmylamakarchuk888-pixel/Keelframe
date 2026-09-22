import { SectionHead } from './SectionHead';
import { chooserColumns, chooserRows } from '../data/content';

export function Chooser() {
  return (
    <section className="section" id="choose">
      <div className="wrap">
        <SectionHead
          eyebrow="How to choose"
          title="Not sure where to start?"
          text="Find the closest fit below. Most projects span two or more columns — we scope them together as one build."
        />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>I need…</th>
                {chooserColumns.map((c) => <th key={c}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {chooserRows.map((r) => (
                <tr key={r.need}>
                  <td>{r.need}</td>
                  {chooserColumns.map((c) => (
                    <td key={c}>
                      {r.fits.includes(c) ? <span className="dot" aria-label="included" /> : <span className="dash">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">● included &nbsp;·&nbsp; — not the usual fit</p>
      </div>
    </section>
  );
}
