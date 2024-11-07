import { Box, Button, Skeleton, Typography } from "@mui/material";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { EnteteSquelette } from "./EnteteSquelette";
interface Personne {
  id: number;
  code: string;
  nom: string;
  prenom: string;
  sexe: string;
  dateNaissance: string;
  adresse: string;
}

const Squelette = () => {
  const [loading, setLoading] = useState(true);
  const [personnes, setPersonnes] = useState<Personne[]>([]);

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      setPersonnes([
        {
          id: 1,
          code: "C001",
          nom: "Diallo",
          prenom: "Mamadou",
          sexe: "Masculin",
          dateNaissance: "1990-05-15",
          adresse: "Conakry, Kaloum",
        },
        {
          id: 2,
          code: "C002",
          nom: "Camara",
          prenom: "Fatoumata",
          sexe: "Féminin",
          dateNaissance: "1988-03-22",
          adresse: "Conakry, Dixinn",
        },
        {
          id: 3,
          code: "C003",
          nom: "Bah",
          prenom: "Ibrahima",
          sexe: "Masculin",
          dateNaissance: "1992-07-10",
          adresse: "Conakry, Ratoma",
        },
        {
          id: 4,
          code: "C004",
          nom: "Sylla",
          prenom: "Aminata",
          sexe: "Féminin",
          dateNaissance: "1995-12-01",
          adresse: "Conakry, Matam",
        },
        {
          id: 5,
          code: "C005",
          nom: "Kouyaté",
          prenom: "Moussa",
          sexe: "Masculin",
          dateNaissance: "1987-11-11",
          adresse: "Conakry, Matoto",
        },
        {
          id: 6,
          code: "C006",
          nom: "Touré",
          prenom: "Mariama",
          sexe: "Féminin",
          dateNaissance: "1993-06-30",
          adresse: "Conakry, Sonfonia",
        },
        {
          id: 7,
          code: "C007",
          nom: "Keita",
          prenom: "Aboubacar",
          sexe: "Masculin",
          dateNaissance: "1991-04-18",
          adresse: "Conakry, Cosa",
        },
        {
          id: 8,
          code: "C008",
          nom: "Sow",
          prenom: "Kadija",
          sexe: "Féminin",
          dateNaissance: "1989-09-09",
          adresse: "Conakry, Hamdallaye",
        },
        {
          id: 9,
          code: "C009",
          nom: "Barry",
          prenom: "Ousmane",
          sexe: "Masculin",
          dateNaissance: "1994-08-25",
          adresse: "Conakry, Kipé",
        },
        {
          id: 10,
          code: "C010",
          nom: "Conté",
          prenom: "Nafissatou",
          sexe: "Féminin",
          dateNaissance: "1996-02-14",
          adresse: "Conakry, Lambanyi",
        },
      ]);
      setLoading(false);
    }, 10000);
  }, []);

  const columns: any[] = Object.keys(EnteteSquelette).map((key) => ({
    field: key,
    headerName: (
      <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
        {EnteteSquelette[key]}
      </b>
    ),
    flex: 1,
  }));

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      {loading ? (
        <Box>
          {/* <Skeleton variant="rectangular" width="100%" height={56} /> */}
          <Box sx={{ display: "flex", gap: 1, my: 1 }}>
            <Skeleton variant="rectangular" width={120} height={36} />
            <Skeleton variant="rectangular" width={120} height={36} />
            <Skeleton variant="rectangular" width={120} height={36} />
          </Box>
          <Box width="100%" height="400">
            {[...Array(10)].map((_, index) => (
              <Box key={index} sx={{ display: "flex", gap: 1, my: 1 }}>
                {Object.keys(EnteteSquelette).map((index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    width={400}
                    height={45}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <DataGrid
          rows={personnes}
          columns={columns}
          pagination={true}
          checkboxSelection
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          getRowId={(row) => row.id}
          slots={{
            toolbar: () => (
              <GridToolbarContainer
                sx={{
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                }}
              >
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <GridToolbarColumnsButton />
                  <GridToolbarFilterButton />
                  <GridToolbarDensitySelector />
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#000000",
                      borderColor: "#000000",
                      borderRadius: "0px",
                      minWidth: "36px",
                      minHeight: "36px",
                      padding: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#000000",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Ajouter
                  </Button>
                </Box>
              </GridToolbarContainer>
            ),
          }}
        />
      )}
    </Box>
  );
};

export default Squelette;
