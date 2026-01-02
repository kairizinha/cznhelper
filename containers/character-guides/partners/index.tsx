import { TierTag } from "@/components/common/TierTag";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PartnersData } from "@/data/partners";
import { PartnersGuide } from "@/types/character-guides";
import { useMemo, useState } from "react";

type Props = {
  partnersGuide: PartnersGuide[];
};

export const PartnersSection = ({ partnersGuide }: Props) => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const partnersMap = useMemo(
    () => Object.fromEntries(PartnersData.map((p) => [p.id, p])),
    []
  );

  return (
    <section className="space-y-10 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center px-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            Click on any partner below to view detailed synergy information.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-14">
          {partnersGuide.map((partner) => {
            const partnerData = partnersMap[partner.id];
            if (!partnerData) return null;

            return (
              <div
                key={partner.id}
                className="flex flex-col items-center gap-4"
              >
                <TierTag tier={partner.tier} />

                <Dialog
                  open={selectedPartner === partner.id}
                  onOpenChange={(open) =>
                    setSelectedPartner(open ? partner.id : null)
                  }
                >
                  <DialogTrigger asChild>
                    <div
                      className="
                      relative overflow-hidden rounded-2xl
                      bg-gradient-to-br from-gray-900/50 to-gray-950/70
                      border border-gray-800 backdrop-blur-sm
                      cursor-pointer transition-all duration-300 ease-out
                      hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-900/30
                      w-full aspect-[4/7] min-w-0
                      max-w-lg mx-auto
                    "
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-transparent to-cyan-600/15" />
                      </div>

                      <img
                        src={partnerData.image}
                        alt={partnerData.name}
                        className="w-full h-full object-cover hover:scale-105 duration-400"
                      />

                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <p className="text-lg font-bold text-gray-100 text-center tracking-tight">
                          {partnerData.name}
                        </p>
                      </div>

                      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent
                    className="
                    max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto
                    bg-gray-950/95 backdrop-blur-xl
                    border border-gray-800 rounded-2xl p-0
                  "
                  >
                    <DialogHeader className="px-8 pt-8 pb-6 border-b border-gray-800 text-center">
                      <DialogTitle className="text-3xl font-bold text-gray-100">
                        {partnerData.name}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="px-8 py-8 space-y-8">
                      <div className="flex justify-center">
                        <div className="relative rounded-2xl overflow-hidden border border-purple-700/40 shadow-2xl">
                          <img
                            src={partnerData.image}
                            alt={partnerData.name}
                            className="w-full max-w-md object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <TierTag tier={partner.tier} />
                      </div>

                      <div
                        className="
                          rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/70
                          border border-gray-800 backdrop-blur-sm
                          p-6 text-center
                        "
                      >
                        <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
