# Kudlife

Jedna appka nad mými appkami: **Úkoly** (vlastní), **Pipeline**, **Škola**, **Finance**.

**Appka:** https://kudla2002.github.io/kudla/

- **Úkoly** – seznamy, Dnes / Naplánované / S vlajkou, opakování, priority, rychlé zadání česky
  („Zavolat Mirkovi zítra 14:00 !! #práce“). Data v zařízení, synchronizace přes soubor
  „Kudlife – úkoly.json“ na Google Disku (oprávnění `drive.file`).
- **Škola, Finance** – vložené přes iframe. Jsou na stejné doméně, takže sdílí přihlášení i data
  se samostatnými appkami. Přihlášení Googlu v rámečku nejde – appky ho udělají v celém okně
  a vrátí se zpět do Kudlife (`sessionStorage['kudlife.ret']`).
- **Pipeline** – běží na `zfpconsulting.github.io`, tedy jiné doméně; prohlížeč by jí ve vložení
  dal prázdné úložiště. Otevírá se samostatně. Řešení: společná vlastní doména pro obě konta.

Google přihlášení používá klienta Školy – v Google Cloud Console musí mít v „Authorized redirect URIs“
adresu `https://kudla2002.github.io/kudla/`.
