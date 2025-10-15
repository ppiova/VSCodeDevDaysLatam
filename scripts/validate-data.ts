import { z } from "zod";
import { TeamSchema, VenueSchema, MatchSchema } from "../lib/types";
import teamsData from "../data/teams.json";
import venuesData from "../data/venues.json";
import matchesData from "../data/matches.json";

const TeamsArraySchema = z.array(TeamSchema);
const VenuesArraySchema = z.array(VenueSchema);
const MatchesArraySchema = z.array(MatchSchema);

function validateData() {
  console.log("Validating data files...\n");

  try {
    TeamsArraySchema.parse(teamsData);
    console.log("✅ teams.json is valid");
  } catch (error) {
    console.error("❌ teams.json validation failed:", error);
    process.exit(1);
  }

  try {
    VenuesArraySchema.parse(venuesData);
    console.log("✅ venues.json is valid");
  } catch (error) {
    console.error("❌ venues.json validation failed:", error);
    process.exit(1);
  }

  try {
    MatchesArraySchema.parse(matchesData);
    console.log("✅ matches.json is valid");
  } catch (error) {
    console.error("❌ matches.json validation failed:", error);
    process.exit(1);
  }

  console.log("\n✨ All data files are valid!");
}

validateData();
