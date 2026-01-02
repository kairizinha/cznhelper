// app/calculator/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function DamageCalculator() {
  const handleNumberChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setter(value === "" ? 0 : Number(value));
    };

  // ATK-related states
  const [baseAtk, setBaseAtk] = useState(0);
  const [atkPercentIncrease, setAtkPercentIncrease] = useState(0);
  const [partnerAtk, setPartnerAtk] = useState(0);
  const [gearFlatAtk, setGearFlatAtk] = useState(0);
  const [affectionFlatAtk, setAffectionFlatAtk] = useState(0);
  const [partnerAtkPercent, setPartnerAtkPercent] = useState(0);
  const [equipmentAtkPercent, setEquipmentAtkPercent] = useState(0);
  const [equipmentFlatAtk, setEquipmentFlatAtk] = useState(0);

  // Card Multiplier states
  const [baseMultiplier, setBaseMultiplier] = useState(0);
  const [potentialAdditiveBase, setPotentialAdditiveBase] = useState(0);
  const [potentialMultiplicative, setPotentialMultiplicative] = useState(0);
  const [genericMultiplicative, setGenericMultiplicative] = useState(1);
  const [genericAdditive, setGenericAdditive] = useState(0);

  // Situational multipliers
  const [elementalAdvantage, setElementalAdvantage] = useState(0.25);
  const [vulnerableMultiplier, setVulnerableMultiplier] = useState(0.5);
  const [enemyDamageReductions, setEnemyDamageReductions] = useState(0);
  const [weaknessReduction, setWeaknessReduction] = useState(0.25);

  // Damage boosts
  const [elementalDmgBoost, setElementalDmgBoost] = useState(0);
  const [mechanicDmgBoost, setMechanicDmgBoost] = useState(0);
  const [enemyDefenseMultiplier, setEnemyDefenseMultiplier] = useState(1);
  const [critDmg, setCritDmg] = useState(0);

  const [finalDamage, setFinalDamage] = useState(0);

  useEffect(() => {
    const finalAtk =
      (baseAtk * (1 + atkPercentIncrease / 100) +
        partnerAtk +
        gearFlatAtk +
        affectionFlatAtk) *
        (1 + partnerAtkPercent / 100 + equipmentAtkPercent / 100) +
      equipmentFlatAtk;

    const potentialAdjusted =
      (baseMultiplier + potentialAdditiveBase) *
      (1 + potentialMultiplicative / 100);
    const genericMultApplied = potentialAdjusted * genericMultiplicative;
    const genericAddApplied = genericMultApplied + genericAdditive;
    const elementalApplied = genericAddApplied * (1 + elementalAdvantage);
    const vulnerableApplied = elementalApplied * (1 + vulnerableMultiplier);
    const reductionApplied =
      vulnerableApplied * (1 - enemyDamageReductions / 100);
    const finalCardMultiplier = reductionApplied * (1 - weaknessReduction);

    const dmg =
      finalCardMultiplier *
      finalAtk *
      0.35 *
      (1 + elementalDmgBoost / 100) *
      (1 + mechanicDmgBoost / 100) *
      enemyDefenseMultiplier *
      (1 + critDmg / 100);

    setFinalDamage(Math.round(dmg));
  }, [
    baseAtk,
    atkPercentIncrease,
    partnerAtk,
    gearFlatAtk,
    affectionFlatAtk,
    partnerAtkPercent,
    equipmentAtkPercent,
    equipmentFlatAtk,
    baseMultiplier,
    potentialAdditiveBase,
    potentialMultiplicative,
    genericMultiplicative,
    genericAdditive,
    elementalAdvantage,
    vulnerableMultiplier,
    enemyDamageReductions,
    weaknessReduction,
    elementalDmgBoost,
    mechanicDmgBoost,
    enemyDefenseMultiplier,
    critDmg,
  ]);

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">
            Chaos Zero Nightmare Damage Calculator
          </CardTitle>
          <CardDescription>
            Accurate ATK-based damage calculation based on the formula from{" "}
            <a
              href="https://www.prydwen.gg/chaos-zero-nightmare/guides/damage-formula"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Prydwen.gg
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-muted rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Final Damage</h2>
            <p className="text-5xl font-bold">
              {finalDamage.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </p>
          </div>

          <Accordion type="multiple" className="mb-8">
            <AccordionItem value="formula">
              <AccordionTrigger className="text-lg">
                View Full Damage Formula Explanation
              </AccordionTrigger>
              <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                <p>The damage is calculated in three main steps:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Final ATK</strong> = (Base ATK × (1 + ATK% Increase)
                    + Partner/ Gear/ Affection Flat) × (1 + Partner/ Equipment
                    ATK%) + Equipment Flat
                  </li>
                  <li>
                    <strong>Card Multiplier</strong> = <br />
                    (((Base Multiplier + Potential Additive) × (1 + Potential
                    %)) × Generic Multiplicative + Generic Additive) × (1 +
                    Elemental Advantage) × (1 + Vulnerable) × (1 - Enemy
                    Reductions%) × (1 - Weakness Reduction)
                  </li>
                  <li>
                    <strong>Final Damage</strong> = Card Multiplier × Final ATK
                    × 0.35 × (1 + Elemental DMG%) × (1 + Mechanic DMG%) × Enemy
                    Defense × (1 + Crit DMG%)
                  </li>
                </ol>
                <p className="mt-4 text-sm text-muted-foreground">
                  This matches the formula documented on Prydwen. Generic
                  Additive being 0 does <strong>not</strong> make damage 0 —
                  it's added after the multiplicative parts.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h2 className="text-2xl font-bold mb-6">Input Your Stats</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ATK Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                ATK Calculation
                <Badge variant="outline">Step 1</Badge>
              </h3>
              <div>
                <Label htmlFor="baseAtk">Base ATK</Label>
                <Input
                  id="baseAtk"
                  type="number"
                  value={baseAtk === 0 ? "" : baseAtk}
                  onChange={handleNumberChange(setBaseAtk)}
                  placeholder="e.g. 2500"
                />
              </div>
              <div>
                <Label htmlFor="atkPercentIncrease">ATK% Increase (%)</Label>
                <Input
                  id="atkPercentIncrease"
                  type="number"
                  value={atkPercentIncrease === 0 ? "" : atkPercentIncrease}
                  onChange={handleNumberChange(setAtkPercentIncrease)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="partnerAtk">Partner Flat ATK</Label>
                <Input
                  id="partnerAtk"
                  type="number"
                  value={partnerAtk === 0 ? "" : partnerAtk}
                  onChange={handleNumberChange(setPartnerAtk)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="gearFlatAtk">Gear + Affection Flat ATK</Label>
                <Input
                  id="gearFlatAtk"
                  type="number"
                  value={gearFlatAtk === 0 ? "" : gearFlatAtk}
                  onChange={handleNumberChange(setGearFlatAtk)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="affectionFlatAtk">
                  Affection Flat ATK (add to above)
                </Label>
                <Input
                  id="affectionFlatAtk"
                  type="number"
                  value={affectionFlatAtk === 0 ? "" : affectionFlatAtk}
                  onChange={handleNumberChange(setAffectionFlatAtk)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="partnerAtkPercent">
                  Partner + Equipment ATK% (%)
                </Label>
                <Input
                  id="partnerAtkPercent"
                  type="number"
                  value={partnerAtkPercent === 0 ? "" : partnerAtkPercent}
                  onChange={handleNumberChange(setPartnerAtkPercent)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="equipmentAtkPercent">(add to above)</Label>
                <Input disabled placeholder="Combine with Partner ATK%" />
              </div>
              <div>
                <Label htmlFor="equipmentFlatAtk">Equipment Flat ATK</Label>
                <Input
                  id="equipmentFlatAtk"
                  type="number"
                  value={equipmentFlatAtk === 0 ? "" : equipmentFlatAtk}
                  onChange={handleNumberChange(setEquipmentFlatAtk)}
                  placeholder="0"
                />
              </div>
            </div>

            {/* Card Multiplier Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Card Multiplier
                <Badge variant="outline">Step 2</Badge>
              </h3>
              <div>
                <Label htmlFor="baseMultiplier">
                  Base Multiplier (card skill)
                </Label>
                <Input
                  id="baseMultiplier"
                  type="number"
                  value={baseMultiplier === 0 ? "" : baseMultiplier}
                  onChange={handleNumberChange(setBaseMultiplier)}
                  placeholder="e.g. 4"
                />
              </div>
              <div>
                <Label htmlFor="potentialAdditiveBase">
                  Potential Additive Base
                </Label>
                <Input
                  id="potentialAdditiveBase"
                  type="number"
                  value={
                    potentialAdditiveBase === 0 ? "" : potentialAdditiveBase
                  }
                  onChange={handleNumberChange(setPotentialAdditiveBase)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="potentialMultiplicative">
                  Potential Multiplicative (%)
                </Label>
                <Input
                  id="potentialMultiplicative"
                  type="number"
                  value={
                    potentialMultiplicative === 0 ? "" : potentialMultiplicative
                  }
                  onChange={handleNumberChange(setPotentialMultiplicative)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="genericMultiplicative">
                  Generic Multiplicative
                </Label>
                <Input
                  id="genericMultiplicative"
                  type="number"
                  value={
                    genericMultiplicative === 1 ? "" : genericMultiplicative
                  }
                  onChange={handleNumberChange(setGenericMultiplicative)}
                  placeholder="1"
                />
              </div>
              <div>
                <Label htmlFor="genericAdditive">Generic Additive</Label>
                <Input
                  id="genericAdditive"
                  type="number"
                  value={genericAdditive === 0 ? "" : genericAdditive}
                  onChange={handleNumberChange(setGenericAdditive)}
                  placeholder="0"
                />
              </div>
            </div>

            {/* Situational & Boosts */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Situational Multipliers & Boosts
                <Badge variant="outline">Step 2 & 3</Badge>
              </h3>
              <div>
                <Label htmlFor="elementalAdvantage">
                  Elemental Advantage (e.g. 0.25 for 25%)
                </Label>
                <Input
                  id="elementalAdvantage"
                  type="number"
                  value={elementalAdvantage === 0.25 ? "" : elementalAdvantage}
                  onChange={handleNumberChange(setElementalAdvantage)}
                  placeholder="0.25"
                />
              </div>
              <div>
                <Label htmlFor="vulnerableMultiplier">
                  Vulnerable (e.g. 0.5 for 50% bonus)
                </Label>
                <Input
                  id="vulnerableMultiplier"
                  type="number"
                  value={
                    vulnerableMultiplier === 0.5 ? "" : vulnerableMultiplier
                  }
                  onChange={handleNumberChange(setVulnerableMultiplier)}
                  placeholder="0.5 if active"
                />
              </div>
              <div>
                <Label htmlFor="enemyDamageReductions">
                  Enemy Damage Reduction (%)
                </Label>
                <Input
                  id="enemyDamageReductions"
                  type="number"
                  value={
                    enemyDamageReductions === 0 ? "" : enemyDamageReductions
                  }
                  onChange={handleNumberChange(setEnemyDamageReductions)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="weaknessReduction">
                  Weakness Debuff (e.g. 0.25 for 25% reduction)
                </Label>
                <Input
                  id="weaknessReduction"
                  type="number"
                  value={weaknessReduction === 0.25 ? "" : weaknessReduction}
                  onChange={handleNumberChange(setWeaknessReduction)}
                  placeholder="0.25 if active"
                />
              </div>
              <div>
                <Label htmlFor="elementalDmgBoost">
                  Elemental DMG% Boost (%)
                </Label>
                <Input
                  id="elementalDmgBoost"
                  type="number"
                  value={elementalDmgBoost === 0 ? "" : elementalDmgBoost}
                  onChange={handleNumberChange(setElementalDmgBoost)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="mechanicDmgBoost">
                  Mechanic DMG% Boost (%)
                </Label>
                <Input
                  id="mechanicDmgBoost"
                  type="number"
                  value={mechanicDmgBoost === 0 ? "" : mechanicDmgBoost}
                  onChange={handleNumberChange(setMechanicDmgBoost)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="enemyDefenseMultiplier">
                  Enemy Defense Multiplier
                </Label>
                <Input
                  id="enemyDefenseMultiplier"
                  type="number"
                  value={
                    enemyDefenseMultiplier === 1 ? "" : enemyDefenseMultiplier
                  }
                  onChange={handleNumberChange(setEnemyDefenseMultiplier)}
                  placeholder="1"
                />
              </div>
              <div>
                <Label htmlFor="critDmg">Crit DMG Bonus (%)</Label>
                <Input
                  id="critDmg"
                  type="number"
                  value={critDmg === 0 ? "" : critDmg}
                  onChange={handleNumberChange(setCritDmg)}
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
