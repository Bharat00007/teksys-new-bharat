import { useState, useRef } from "react";
import { Loader2, CheckCircle2, AlertCircle, Check } from "lucide-react";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { COURSES } from "@/lib/site";

const MODULES = [
  {
    id: "foundation",
    title: "1. Foundation Modules *",
    options: [
      { id: "m1", label: "M1: Semiconductor Fundamentals for Science & Engineering Students" },
      { id: "m2", label: "M2: Semiconductor Materials: Si, GaN, SiC and Emerging Materials" },
      { id: "m3", label: "M3: Energy Bands, Carrier Transport and Device Physics" },
      { id: "m4", label: "M4: Cleanroom, Wafer, Thin Film and Fabrication Process Awareness" },
      { id: "m5", label: "M5: Semiconductor Testing, Measurement and Reliability Basics" },
      { id: "m-na", label: "NA" },
    ],
  },
  {
    id: "gan",
    title: "2. GaN Technology Modules",
    options: [
      { id: "g1", label: "G1: Introduction to Gallium Nitride Technology" },
      { id: "g2", label: "G2: GaN HEMT Device Fundamentals" },
      { id: "g3", label: "G3: GaN-on-Si, GaN-on-SiC and GaN-on-Sapphire Platforms" },
      { id: "g4", label: "G4: GaN RF Power Amplifiers" },
      { id: "g5", label: "G5: GaN for Defence, Radar and Communication Systems" },
      { id: "g6", label: "G6: GaN Power Electronics" },
      { id: "g7", label: "G7: GaN Device Fabrication Process Flow" },
      { id: "g8", label: "G8: GaN Device Characterization" },
      { id: "g9", label: "G9: GaN Reliability and Failure Analysis" },
      { id: "g10", label: "G10: Advanced GaN Systems Design" },
      { id: "g-na", label: "NA" },
    ],
  },
  {
    id: "sic",
    title: "3. SiC Technology Modules *",
    options: [
      { id: "s1", label: "S1: Introduction to Silicon Carbide Technology" },
      { id: "s2", label: "S2: SiC Material Growth and Wafer Technology" },
      { id: "s3", label: "S3: SiC Power Devices" },
      { id: "s4", label: "S4: SiC Device Physics and Design" },
      { id: "s5", label: "S5: SiC Fabrication Process Flow" },
      { id: "s6", label: "S6: SiC Power Electronics Applications" },
      { id: "s7", label: "S7: SiC Packaging and Thermal Management" },
      { id: "s8", label: "S8: SiC Testing and Reliability" },
      { id: "s9", label: "S9: SiC vs GaN vs Silicon" },
      { id: "s10", label: "S10: SiC Business and Manufacturing Ecosystem" },
      { id: "s-na", label: "NA" },
    ],
  },
  {
    id: "rf",
    title: "4. RF and Microwave Technology Modules *",
    options: [
      { id: "rf1", label: "RF1: RF and Microwave Engineering Fundamentals" },
      { id: "rf2", label: "RF2: S-Parameters and Network Analyzer Training" },
      { id: "rf3", label: "RF3: RF Power Amplifier Basics" },
      { id: "rf4", label: "RF4: RF Front-End System Design" },
      { id: "rf5", label: "RF5: Radar and Communication RF Systems" },
      { id: "rf6", label: "RF6: GaN RF PA Design and Testing" },
      { id: "rf7", label: "RF7: RF PCB Design and Layout" },
      { id: "rf8", label: "RF8: Antenna and RF Measurement Basics" },
      { id: "rf9", label: "RF9: High-Power RF Systems" },
      { id: "rf10", label: "RF10: RF System Integration for Defence and Telecom" },
      { id: "rf11", label: "RF11: RF Simulation Tools and Design Flow" },
      { id: "rf12", label: "RF12: Advanced RF Power Amplifiers" },
      { id: "rf-na", label: "NA" },
    ],
  },
  {
    id: "sensors",
    title: "5. Sensors and Transducers Modules *",
    options: [
      { id: "se1", label: "SE1: Introduction to Sensors and Transducers" },
      { id: "se2", label: "SE2: Semiconductor Sensors" },
      { id: "se3", label: "SE3: MEMS Sensor Technology" },
      { id: "se4", label: "SE4: Optical Sensors and Photodetectors" },
      { id: "se5", label: "SE5: Gas and Chemical Sensors" },
      { id: "se6", label: "SE6: IoT-Based Sensor System Design" },
      { id: "se7", label: "SE7: Sensor Signal Conditioning" },
      { id: "se8", label: "SE8: Agro and Environmental Sensor Applications" },
      { id: "se9", label: "SE9: Industrial Sensor Applications" },
      { id: "se10", label: "SE10: Sensor Packaging and Reliability" },
      { id: "se-na", label: "NA" },
    ],
  },
  {
    id: "power",
    title: "6. Power Electronics Modules *",
    options: [
      { id: "pe1", label: "PE1: Power Electronics Fundamentals" },
      { id: "pe2", label: "PE2: Power Semiconductor Devices" },
      { id: "pe3", label: "PE3: DC-DC Converter Basics" },
      { id: "pe4", label: "PE4: Inverter and Motor Drive Fundamentals" },
      { id: "pe5", label: "PE5: GaN-Based Power Converter Design" },
      { id: "pe6", label: "PE6: SiC-Based High-Voltage Power Systems" },
      { id: "pe7", label: "PE7: Thermal Management in Power Electronics" },
      { id: "pe8", label: "PE8: Power Module Packaging" },
      { id: "pe9", label: "PE9: Power Electronics Testing" },
      { id: "pe10", label: "PE10: EV Charger and Renewable Energy Systems" },
      { id: "pe-na", label: "NA" },
    ],
  },
  {
    id: "materials",
    title: "7. Materials Science Modules *",
    options: [
      { id: "ms1", label: "MS1: Materials Science for Semiconductor Technology" },
      { id: "ms2", label: "MS2: Crystal Structure and Wafer Fundamentals" },
      { id: "ms3", label: "MS3: Thin Film Deposition Technologies" },
      { id: "ms4", label: "MS4: Lithography and Patterning Materials" },
      { id: "ms5", label: "MS5: Dielectrics and Passivation Layers" },
      { id: "ms6", label: "MS6: Metallization and Contact Materials" },
      { id: "ms7", label: "MS7: Defects, Traps and Interface States" },
      { id: "ms8", label: "MS8: Semiconductor Process Chemistry" },
      { id: "ms9", label: "MS9: Materials Characterization Techniques" },
      { id: "ms10", label: "MS10: Advanced Materials for Future Electronics" },
      { id: "ms-na", label: "NA" },
    ],
  },
  {
    id: "advanced",
    title: "8. Advanced Semiconductor Systems Modules *",
    options: [
      { id: "as1", label: "AS1: Semiconductor System Design Overview" },
      { id: "as2", label: "AS2: RF System Architecture" },
      { id: "as3", label: "AS3: Power System Architecture" },
      { id: "as4", label: "AS4: Sensor-Based Embedded Systems" },
      { id: "as5", label: "AS5: Semiconductor Packaging and Assembly" },
      { id: "as6", label: "AS6: Thermal, Electrical and Mechanical Co-Design" },
      { id: "as7", label: "AS7: Semiconductor Testing and Validation" },
      { id: "as8", label: "AS8: Reliability, Qualification and Standards" },
      { id: "as9", label: "AS9: Semiconductor Product Development Lifecycle" },
      { id: "as10", label: "AS10: Semiconductor Business, Supply Chain and India Opportunity" },
      { id: "as-na", label: "NA" },
    ],
  },
];

export default function SemiconductorSkillTraining() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedModules, setSelectedModules] = useState<Record<string, string[]>>({});
  const [selectedTenModules, setSelectedTenModules] = useState<string[]>([]);

  // State for strictly resetting radio groups
  const [whoAreYou, setWhoAreYou] = useState<string>("");
  const [mou, setMou] = useState<string>("yes");

  const toggleTenModule = (title: string) => {
    setSelectedTenModules(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const handleModuleChange = (categoryId: string, optionLabel: string, checked: boolean) => {
    setSelectedModules(prev => {
      const cat = prev[categoryId] || [];
      if (checked) {
        return { ...prev, [categoryId]: [...cat, optionLabel] };
      } else {
        return { ...prev, [categoryId]: cat.filter(l => l !== optionLabel) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      whoAreYou,
      name: fd.get("name"),
      institution: fd.get("institution"),
      department: fd.get("department"),
      year: fd.get("year"),
      contactNumber: fd.get("contactNumber"),
      email: fd.get("email"),
      remarks: fd.get("remarks"),
      mou,
      selectedTenModules,
      modules: selectedModules,
    };

    try {
      const apiUrlRaw = String(import.meta.env.VITE_API_URL ?? "").trim();
      const apiUrl = apiUrlRaw.length > 0 ? apiUrlRaw.replace(/\/$/, "") : "/api";
      const response = await fetch(`${apiUrl}/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const body = (await response.text()).slice(0, 200);
        throw new Error(`The registration API returned ${contentType || "an unknown content type"} (HTTP ${response.status}) instead of JSON.${body ? ` Response starts: ${body}` : ""}`);
      }
      const result = await response.json();
      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMsg(result.message || result.error || "Submission Failed");
        setLoading(false);
        return;
      }

      setStatus("success");
      if (formRef.current) formRef.current.reset();
      setSelectedModules({});
      setSelectedTenModules([]);
      setWhoAreYou("");
      setMou("yes");

    } catch (error) {
      setStatus("error");
      setErrorMsg("Something went wrong while submitting your registration. Please try again later or contact us.");
    }
    setLoading(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-hero-radial text-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
            Semiconductor Skill <span className="text-gradient-brand">Training Program MoU</span>
          </h1>
        </div>
      </section>

      {/* Main Form Section */}
      <Section className="py-16 sm:py-24 bg-background">
        <form ref={formRef} onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-12">

          {/* Section 1: Institution Registration */}
          <Card className="border-primary/20 shadow-lg glow-ring overflow-hidden">
            <CardHeader className="bg-secondary/40 border-b border-border/50">
              <CardTitle className="text-2xl">Section 1: Institution Registration</CardTitle>
              <CardDescription>Please provide your basic details below.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 pt-8">

              <div className="grid gap-3 mb-2">
                <Label className="text-base font-semibold">Who are you? <span className="text-destructive">*</span></Label>
                <RadioGroup
                  value={whoAreYou}
                  onValueChange={setWhoAreYou}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-8"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Student" id="who-student" />
                    <Label htmlFor="who-student" className="cursor-pointer">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Faculty" id="who-faculty" />
                    <Label htmlFor="who-faculty" className="cursor-pointer">Faculty</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Organization" id="who-organization" />
                    <Label htmlFor="who-organization" className="cursor-pointer">Organization</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Your Name <span className="text-destructive">*</span></Label>
                  <Input id="name" name="name" required placeholder="Enter your full name" className="bg-background" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="institution">Institution Name <span className="text-destructive">*</span></Label>
                  <Input id="institution" name="institution" required placeholder="Enter institution name" className="bg-background" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="department">Department <span className="text-destructive">*</span></Label>
                  <Input id="department" name="department" required placeholder="Enter your department" className="bg-background" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="year">Current Year</Label>
                  <Input id="year" name="year" className="bg-background" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contactNumber">Contact Number <span className="text-destructive">*</span></Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    required
                    pattern="[0-9]{10,15}"
                    title="Please enter a valid phone number (10 to 15 digits)"
                    placeholder="e.g. 9876543210"
                    className="bg-background"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="bg-background"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Semiconductor Training Modules Selection */}
          <Card className="border-primary/20 shadow-lg glow-ring overflow-hidden">
            <CardHeader className="bg-secondary/40 border-b border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">Section 2: Module Selection</CardTitle>
                <CardDescription className="mt-1">
                  Select the Semiconductor Training Modules you wish to enroll or partner for (Select multiple).
                </CardDescription>
              </div>
              {selectedTenModules.length > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary border border-primary/20 self-start sm:self-auto shadow-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  {selectedTenModules.length} {selectedTenModules.length === 1 ? "module" : "modules"} selected
                </span>
              )}
            </CardHeader>
            <CardContent className="pt-6 pb-8 space-y-6">
              {/* Filter / Quick actions bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-border/40 pb-4">
                <span className="text-muted-foreground">
                  Click any module card to select or deselect options.
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedTenModules(COURSES.map(c => c.title));
                    }}
                    className="text-primary hover:underline font-semibold cursor-pointer"
                  >
                    Select All
                  </button>
                  <span className="text-border">•</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedTenModules([]);
                    }}
                    className="text-muted-foreground hover:text-foreground hover:underline cursor-pointer"
                  >
                    Deselect All
                  </button>
                </div>
              </div>

              {/* Semiconductor Modules Selection Grid */}
              <div className="grid gap-3.5 sm:grid-cols-2">
                {COURSES.map((course) => {
                  const isSelected = selectedTenModules.includes(course.title);
                  return (
                    <div
                      key={course.slug}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={0}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleTenModule(course.title);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "Enter") {
                          e.preventDefault();
                          toggleTenModule(course.title);
                        }
                      }}
                      className={`group relative flex w-full cursor-pointer items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 select-none ${isSelected
                          ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/30"
                          : "border-border/70 bg-card hover:border-primary/40 hover:bg-accent/40"
                        }`}
                    >
                      <div
                        className={`h-5 w-5 shrink-0 rounded-md border flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-input bg-background group-hover:border-primary/50"
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5 text-primary-foreground stroke-[3]" />}
                      </div>
                      <span
                        className={`font-semibold text-base leading-snug transition-colors min-w-0 flex-1 ${isSelected ? "text-primary font-bold" : "text-foreground group-hover:text-primary/90"
                          }`}
                      >
                        {course.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Remarks Section */}
          <Card className="border-primary/20 shadow-lg glow-ring overflow-hidden">
            <CardHeader className="bg-secondary/40 border-b border-border/50">
              <CardTitle className="text-xl">Remarks / Feedback</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <Textarea
                name="remarks"
                placeholder="Write your feedback, comments or additional requirements..."
                className="min-h-[120px] resize-y bg-background"
              />
            </CardContent>
          </Card>

          {/* MOU Section */}
          <Card className="border-primary/20 shadow-lg glow-ring overflow-hidden">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Interested to get the MOU?</h3>
                  <p className="text-sm text-muted-foreground mt-1">Let us know if you want to sign a Memorandum of Understanding.</p>
                </div>
                <RadioGroup value={mou} onValueChange={setMou} className="flex items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="mou-yes" />
                    <Label htmlFor="mou-yes" className="cursor-pointer text-base">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="mou-no" />
                    <Label htmlFor="mou-no" className="cursor-pointer text-base">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-md bg-destructive/10 p-4 text-sm text-destructive border border-destructive/20 shadow-sm animate-in fade-in zoom-in-95">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <strong className="block font-semibold mb-1">Submission Failed</strong>
                <span>{errorMsg}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="relative overflow-hidden group w-full max-w-sm rounded-full bg-primary hover:bg-indigo-glow shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 h-14"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              {loading ? (
                <span className="flex items-center gap-2 relative z-10">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </span>
              ) : (
                <span className="relative z-10 text-base font-bold tracking-wide uppercase">
                  Submit Registration
                </span>
              )}
            </Button>
          </div>
        </form>
      </Section>

      {/* Success Modal Overlay */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md p-6 bg-card border border-border rounded-2xl shadow-2xl m-4 animate-in zoom-in-95 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-primary mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Registration Submitted Successfully!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for registering for the Semiconductor Skill Training Program. Your registration has been received successfully. Our team will contact you soon.
            </p>
            <Button
              onClick={() => setStatus("idle")}
              className="w-full h-12 rounded-full font-semibold"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
