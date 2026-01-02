import { UniqueCard } from "@/types/character-guides";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMemo, useState } from "react";
import { TierTag } from "@/components/common/TierTag";
import { CardRender } from "@/components/common/CardRender";
import { Attributes } from "@/types/card";

type Props = {
  uniqueCards: UniqueCard[];
  attribute?: Attributes;
};

export const BaseCard = ({ uniqueCards, attribute }: Props) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const cardsWithEpiphanies = useMemo(
    () =>
      uniqueCards.filter(
        (c) => Array.isArray(c.epiphanies) && c.epiphanies.length > 0
      ),
    [uniqueCards]
  );

  if (cardsWithEpiphanies.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        No epiphany data available yet.
      </div>
    );
  }

  return (
    <div className="space-y-10 py-8">
      <div className="text-center px-4">
        <p className="text-lg text-gray-300 leading-relaxed">
          Click a Base Card to see Tier Analysis
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Ranked based on community data and expert review for the specific
          character
        </p>
      </div>

      {/* Base Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {cardsWithEpiphanies.map((cardData) => (
          <Dialog
            key={cardData.id}
            open={selectedCardId === cardData.id}
            onOpenChange={(open) =>
              setSelectedCardId(open ? cardData.id : null)
            }
          >
            <DialogTrigger asChild>
              <div
                role="button"
                tabIndex={0}
                className="
                  group relative overflow-hidden rounded-2xl
                  bg-gradient-to-br from-gray-900/50 to-gray-950/70
                  border border-gray-800
                  transition-all duration-300 ease-out
                  hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-900/20
                  hover:-translate-y-1 cursor-pointer
                "
                onMouseMove={(e) => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                  }
                }}
              >
                <CardRender
                  card={cardData}
                  scaleOnHover={false}
                  attribute={attribute}
                  isEpiphany="nospark"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </DialogTrigger>

            {/* Dialog Content */}
            <DialogContent
              className="
              !w-[95vw] !max-w-7xl max-h-[95vh] overflow-y-auto
              bg-gray-950/95 backdrop-blur-xl border border-gray-800
              rounded-2xl p-0
            "
            >
              <DialogHeader className="px-8 pt-8 pb-6 border-b border-gray-800">
                <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-100">
                  {cardData.name} - Epiphanies
                </DialogTitle>
              </DialogHeader>

              <div className="px-8 py-8 space-y-10">
                {/* Epiphanies Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {cardData.epiphanies!.map((epiphany) => (
                    <div key={epiphany.id} className="flex flex-col gap-3">
                      <TierTag tier={epiphany.tier} />
                      <div
                        className="
                          group relative overflow-hidden rounded-xl
                          transition-all duration-300
                        "
                        onMouseMove={(e) => {
                          if (window.matchMedia("(hover: hover)").matches) {
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            e.currentTarget.style.setProperty(
                              "--mouse-x",
                              `${x}px`
                            );
                            e.currentTarget.style.setProperty(
                              "--mouse-y",
                              `${y}px`
                            );
                          }
                        }}
                      >
                        <CardRender
                          card={{
                            ...epiphany,
                            name: cardData.name,
                            image: cardData.image,
                            rarity: cardData.rarity,
                          }}
                          attribute={attribute}
                          isEpiphany="spark"
                          size="small"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-cyan-500/20" />
                          <div
                            className="absolute inset-0 mix-blend-screen"
                            style={{
                              background:
                                "radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.3) 0%, transparent 60%)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tier Explanations */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-100">
                    Epiphanies Tier Explanation
                  </h3>
                  <div className="space-y-4">
                    {cardData.epiphanies!.map((epiphany) => (
                      <div
                        key={epiphany.id}
                        className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 text-gray-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <TierTag tier={epiphany.tier} />
                          <span className="font-semibold text-gray-100">
                            {epiphany.id}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed">
                          {epiphany.reasoning || "No reasoning provided yet."}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divine Epiphanies */}
                {cardData.divineEpiphanies &&
                  cardData.divineEpiphanies.length > 0 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-100">
                          Divine Epiphanies
                        </h3>
                        <p className="text-sm text-gray-400 mt-2">
                          Good Divine Epiphanies that this card can roll
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {cardData.divineEpiphanies.map((divine) => (
                          <div
                            key={divine.name || divine.icon}
                            className="p-5 rounded-xl bg-gray-900/50 border border-gray-800"
                          >
                            <div className="flex items-center gap-4 mb-3">
                              {divine.icon && (
                                <img
                                  src={divine.icon}
                                  alt={divine.name ?? "Divine Epiphany"}
                                  className="w-16 h-16 object-contain"
                                />
                              )}
                              {divine.name && (
                                <h4 className="font-semibold text-gray-200">
                                  {divine.name}
                                </h4>
                              )}
                            </div>
                            {divine.reasoning && (
                              <p className="text-sm text-gray-300/90 leading-relaxed">
                                {divine.reasoning}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};
