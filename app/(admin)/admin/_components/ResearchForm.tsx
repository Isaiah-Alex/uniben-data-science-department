import type { ResearchArea, ResearchStatus } from "@/db/schema";
import { inputCls, selectCls } from "@/components/admin/fieldStyles";

type FormValues = Omit<ResearchArea, "id" | "updatedAt">;

type Props = {
  values: FormValues;
  onChange: (v: FormValues) => void;
  onSubmit: () => void;
  onClose: () => void;
  submitLabel: string;
};

export function ResearchForm({
  values,
  onChange,
  onSubmit,
  onClose,
  submitLabel,
}: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">
          Research Area Title
        </label>
        <input
          type="text"
          value={values.title}
          onChange={(e) => onChange({ ...values, title: e.target.value })}
          placeholder="e.g. Machine Learning & AI"
          className={inputCls}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Lead Researcher
          </label>
          <input
            type="text"
            value={values.lead}
            onChange={(e) => onChange({ ...values, lead: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Status
          </label>
          <select
            value={values.status}
            onChange={(e) =>
              onChange({ ...values, status: e.target.value as ResearchStatus })
            }
            className={selectCls}
          >
            <option>Active</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Members
          </label>
          <input
            type="number"
            value={values.members}
            onChange={(e) =>
              onChange({ ...values, members: Number(e.target.value) })
            }
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Publications
          </label>
          <input
            type="number"
            value={values.publications}
            onChange={(e) =>
              onChange({ ...values, publications: Number(e.target.value) })
            }
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">
          Tags{" "}
          <span className="font-normal text-muted-foreground">
            (comma-separated)
          </span>
        </label>
        <input
          type="text"
          value={values.tags}
          onChange={(e) => onChange({ ...values, tags: e.target.value })}
          placeholder="Deep Learning, NLP, Computer Vision"
          className={inputCls}
        />
      </div>

      <div className="flex gap-3 justify-end pt-2">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm border border-border text-foreground hover:bg-muted transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          disabled={!values.title.trim() || !values.lead.trim()}
          className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {submitLabel}
        </button>
      </div>
    </div>
  );
}
